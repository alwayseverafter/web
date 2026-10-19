import { designs } from "@/lib/designs";
import { TemplateDetails } from "@/components/aea-site";
export function generateStaticParams(){return designs.map(({slug})=>({slug}));}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <TemplateDetails slug={slug}/>;}
