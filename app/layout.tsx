import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@inlang/paraglide-next";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/layout/sidebar";
import { Separator } from "@/components/ui/separator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <html lang="en">
        <body className={inter.className}>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="overflow-hidden">
              <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
              </header>
              <div className="flex flex-1 flex-col gap-4 p-4">
                {children}
              </div>
            </SidebarInset>
          </SidebarProvider>
        </body>
      </html>
    </LanguageProvider>
  );
}
