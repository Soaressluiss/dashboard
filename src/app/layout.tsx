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
    <html lang="pt-br">
      <body className={inter.className}>
        <section className="grid grid-cols-4">
          <section className="col-span-1">
            <SideBar />
          </section>
          <section className="col-span-3 bg-light-background">
            <Header />
            {children}
          </section>
        </section>
      </body>
    </html>
  );
}
