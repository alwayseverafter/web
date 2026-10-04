"use client";

import { useEffect } from "react";

/** Native scrolling, with one scheduled frame and no touch-event interception. */
export function useMotion() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = matchMedia("(max-width: 600px)");
    let frame = 0;
    let targets: HTMLElement[] = [];
    const observed = new WeakSet<Element>();
    const clamp = (n: number) => Math.max(0, Math.min(1, n));
    const reveals = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          reveals.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    const tick = () => {
      frame = 0;
      if (reduced.matches) return;
      const height = innerHeight;
      // Read all geometry before writing styles to avoid repeated layout work.
      const measurements = targets.map(el => ({ el, rect: el.getBoundingClientRect() }));
      measurements.forEach(({ el, rect: r }) => {
        if (r.bottom < -100 || r.top > height + 100) return;
        const travel = clamp((height - r.top) / (height + r.height));
        el.style.setProperty("--travel", String(travel));
        el.style.setProperty("--drift", `${r.top * 0.12}px`);
        const pinned = el.classList.contains("preview-scroll-stage");
        const progress = pinned && mobile.matches
          ? clamp((85 - r.top) / Math.max(1, r.height - Math.min(550, height - 100)))
          : clamp(-r.top / Math.max(1, r.height - height));
        el.style.setProperty("--progress", String(progress));
      });
      const distance = document.documentElement.scrollHeight - height;
      document.documentElement.style.setProperty("--page-progress", String(clamp(scrollY / Math.max(1, distance))));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(tick); };
    const collect = () => {
      document.querySelectorAll<HTMLElement>(".design-card, .feature-grid article, .process-list article, .faq-list article").forEach((el, i) => {
        el.dataset.reveal = "";
        el.style.setProperty("--reveal-delay", `${(i % (mobile.matches ? 2 : 3)) * 80}ms`);
      });
      document.querySelectorAll("[data-reveal]").forEach(el => {
        if (!observed.has(el)) { observed.add(el); reveals.observe(el); }
      });
      targets = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll], .preview-scroll-stage, .design-visual, .process-list, .final-cta"));
      schedule();
    };
    const preference = () => {
      document.documentElement.classList.toggle("motion-ready", !reduced.matches);
      schedule();
    };
    preference();
    collect();
    // Filters mount new cards; their reveal and parallax must work as well.
    const changes = new MutationObserver(collect);
    changes.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduced.addEventListener("change", preference);
    return () => {
      reveals.disconnect(); changes.disconnect(); cancelAnimationFrame(frame);
      document.documentElement.classList.remove("motion-ready");
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduced.removeEventListener("change", preference);
    };
  }, []);
}
