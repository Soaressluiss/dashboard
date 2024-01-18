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
    <html lang="pt-br" className="dark scroll-smooth">
      <body className={inter.className}>
        <section className="grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-[290px_1fr_1fr] relative laptop:h-screen">
          <section className=" md:col-span-1 ">
            <SideBar />
          </section>
          <section className="col-span-2 bg-light-background dark:bg-dark-background">
            <Header />
            {children}
          </section>
        </section>
      </body>
    </html>
  );
}
