import type { Metadata } from "next";
import "./globals.css"; import "./pages.css"; import "./responsive.css"; import "./motion.css"; import "./phone.css";
export const metadata: Metadata = {title:"AlwaysEverafter — An invitation to your forever",description:"Thoughtfully crafted digital invitations for weddings and life's beautiful celebrations.",icons:{icon:"/assets/monogram.webp"}};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}

