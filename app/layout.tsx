import type { Metadata } from "next";
import "../styles/main.css";
import Navbar from "@/components/navbar/Navbar";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/footer/Footer";
import { siteInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: siteInfo.title,
  description: siteInfo.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="Body">
        <NextTopLoader color="#d1d5db" />
        <Navbar />
        <div className="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
