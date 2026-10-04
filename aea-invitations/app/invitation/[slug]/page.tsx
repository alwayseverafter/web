import { InvitationPage } from "@/components/aea-site";
export function generateStaticParams() { return ['the-secret-garden','modern-romance','golden-hour','midnight-vows','little-wonder','a-date-to-remember'].map(slug=>({slug})); }
export default async function Page({params}:{params:Promise<{slug:string}>}) { const {slug}=await params; return <InvitationPage slug={slug}/>; }
