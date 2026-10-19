import { studioThemes } from "@/lib/designs";
import { InvitationPage } from "@/components/aea-site";
import { StudioInvitation } from "@/components/studio-invitation";
import GraceInvitation from "@/components/grace-invitation";
export function generateStaticParams() { return ['the-secret-garden','modern-romance','golden-hour','midnight-vows','little-wonder','a-date-to-remember','everlasting-grace',...studioThemes.map(t=>t.slug)].map(slug=>({slug})); }
export default async function Page({params}:{params:Promise<{slug:string}>}) { const {slug}=await params; return studioThemes.some(t=>t.slug===slug)?<StudioInvitation slug={slug}/>:slug==='everlasting-grace'?<GraceInvitation/>:<InvitationPage slug={slug}/>; }
