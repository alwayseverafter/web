"use client";
import { useEffect, useState } from 'react';

import { studioThemes } from "@/lib/designs";
const sample = { date:'2027-06-18T16:00:00+02:00', dateLabel:'18 June 2027', venue:'Lake Como, Italy', schedule:[['16:00','The ceremony','A promise made among our favourite people.'],['17:30','Aperitivo','A toast to this new beginning.'],['19:00','Dinner & dancing','Stay for the stories. Stay for one more dance.']] };
export function StudioInvitation({slug}:{slug:string}) {
 const theme=studioThemes.find(t=>t.slug===slug)!;
 const [days,setDays]=useState<number|null>(null),[sent,setSent]=useState(false);
 useEffect(()=>{const update=()=>setDays(Math.max(0,Math.ceil((new Date(sample.date).getTime()-Date.now())/86400000)));update();const timer=setInterval(update,60000);return()=>clearInterval(timer)},[]);
 return <main className={`studio-invite ${theme.tone}`}>
  <nav className="studio-toolbar" aria-label="Preview navigation"><a href="/designs">Back to collection</a><a href={`/create?design=${slug}`}>Choose this template</a></nav>
  <header className="studio-cover">
   <p className="studio-demo">Demonstration invitation</p>
   <div className="studio-cover-inner">
    <p className="studio-overline">Together with our families</p>
    {theme.tone==='botanical'&&<span className="botanical-mark" aria-hidden="true">❧</span>}
    {theme.tone==='heritage'&&<img className="heritage-ornament" src="/assets/grace/ornament.webp" width="400" height="160" alt=""/>}
    <h1>{theme.names.split(' & ').map((n,i)=><span key={n}>{i>0&&<i>&</i>}{n}</span>)}</h1>
    <p className="studio-date">{sample.dateLabel}</p><p>{sample.venue}</p>
    <a className="studio-link" href="#celebration">You’re invited ↓</a>
   </div>
   {theme.tone==='romantic'&&<img className="romantic-photo" src="/assets/romantic-bouquet.webp" width="600" height="600" alt="Soft flowers in an elegant wedding arrangement"/>}
  </header>
  <section id="celebration" className="studio-welcome"><div><p className="studio-overline">An invitation to celebrate</p><h2>{theme.tone==='heritage'?'Two hearts. One beautiful beginning.':theme.tone==='romantic'?'Our favourite day, with our favourite people.':'A day rooted in love.'}</h2><p>With full hearts, we invite you to join us for our wedding. Come for the vows, stay for the laughter, and help us make a memory that lasts.</p></div>{theme.tone==='botanical'&&<img src="/assets/garden.webp" width="600" height="800" alt="Illustrated garden arch with olive foliage"/>}<div className="studio-countdown"><strong>{days??'—'}</strong><span>days until we celebrate</span><small>Friday · {sample.dateLabel}</small></div></section>
  <section className="studio-day"><p className="studio-overline">The order of the day</p><h2>From “I do” to<br/>the last dance.</h2><div className="studio-timeline">{sample.schedule.map(([time,title,body])=><article key={time}><time>{time}</time><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>
  <section className="studio-venue"><div><p className="studio-overline">A place to gather</p><h2>By the lake</h2><p>{sample.venue}</p><p>Our sample setting is the Italian lakes. Final venue and travel details will be personalised for your celebration.</p><a className="studio-button" href="https://www.google.com/maps/search/?api=1&query=Lake+Como+Italy" target="_blank" rel="noreferrer">Explore the location</a></div><aside><h3>A little note on attire</h3><p>{theme.tone==='heritage'?'Festive formalwear. Traditional attire is warmly welcomed.':theme.tone==='romantic'?'Soft colours, summer tailoring, and shoes made for dancing.':'Garden-party elegance. Light fabrics, soft neutrals, and something you love.'}</p></aside></section>
  <section className="studio-response" id="rsvp"><p className="studio-overline">We saved you a place</p><h2>Will you join us?</h2><p>Try a sample RSVP. No response is sent or saved.</p>{sent?<div role="status"><h3>Thank you for trying our invitation.</h3><p>Your demonstration response is complete.</p><button className="studio-button" onClick={()=>setSent(false)}>Try again</button></div>:<form onSubmit={e=>{e.preventDefault();setSent(true)}}><label>Your name<input name="name" autoComplete="name" required maxLength={120}/></label><label>Your response<select name="attendance" required defaultValue=""><option value="" disabled>Please choose</option><option>Joyfully accepts</option><option>Regretfully declines</option></select></label><label>Dietary preferences or a little message<textarea name="message" rows={3} maxLength={1000}/></label><button className="studio-button" type="submit">Send sample response</button></form>}</section>
  <footer className="studio-signoff"><p>With love,</p><h2>{theme.names}</h2><p>Demonstration content · AlwaysEverafter</p><a className="studio-link" href={`/create?design=${slug}`}>Make this invitation yours</a></footer>
 </main>
}
