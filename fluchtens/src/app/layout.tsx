import type { Metadata } from "next";
import "../styles/globals.css";
import { Header } from "@/components/layouts/Header";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Francois Luchtens - Full Stack Developer",
  description:
    "Passionate about new technologie and computer programming, I am currently computer sciences student at 19 (@42 Network) in Brussels.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen m-auto ${montserrat.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
