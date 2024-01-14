import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dasboard for your datas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className="dark">
      <body className={inter.className}>
        <section className="grid grid-cols-1 md:grid-cols-3 laptop:grid-cols-4 relative laptop:h-screen">
          <section className="relative md:col-span-1 ">
            <SideBar />
          </section>
          <section className="col-span-3 bg-light-background dark:bg-dark-background">
            <Header />
            {children}
          </section>
        </section>
      </body>
    </html>
  );
}
