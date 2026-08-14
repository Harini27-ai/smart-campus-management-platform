import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata = {
  title: "Smart Campus Management",
  description: "Campus management platform"
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en" suppressHydrationWarning><body><Providers>{children}</Providers></body></html>;
}
