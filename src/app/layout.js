import "./globals.css";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import { TopNav } from "@/components/top-nav";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SettingsProvider } from "@/contexts/settings-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DashNest Dashboard",
  description: "A modern, responsive financial dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SettingsProvider>
          <TooltipProvider delayDuration={0}>
            <div className="min-h-screen flex">
              <Sidebar />
              <div className="flex-1">
                <TopNav />
                <div className=" mx-auto ">
                  <main className="w-full">{children}</main>
                </div>
              </div>
            </div>
          </TooltipProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
