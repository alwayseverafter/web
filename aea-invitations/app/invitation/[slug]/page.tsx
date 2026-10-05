import { InvitationPage } from "@/components/aea-site";
import GraceInvitation from "@/components/grace-invitation";
export function generateStaticParams() { return ['the-secret-garden','modern-romance','golden-hour','midnight-vows','little-wonder','a-date-to-remember','everlasting-grace'].map(slug=>({slug})); }
export default async function Page({params}:{params:Promise<{slug:string}>}) { const {slug}=await params; return slug==='everlasting-grace'?<GraceInvitation/>:<InvitationPage slug={slug}/>; }
