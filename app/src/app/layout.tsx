import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Francois Luchtens - Full Stack Developer",
  description:
    "Web developer, passionate about computer programming and projet creation, always keen to learn new technologies. Alumni at 19 (42 Network) in Brussels.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
