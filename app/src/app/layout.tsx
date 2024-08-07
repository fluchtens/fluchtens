import { Footer } from "@/components/layouts/footer/footer";
import { Header } from "@/components/layouts/header/header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Francois Luchtens - Full Stack Developer",
  description: "Junior web developer, passionate about new technologies and computer programming. Alumni at 19 (42 Network) in Brussels.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`min-h-screen m-auto flex flex-col ${montserrat.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
