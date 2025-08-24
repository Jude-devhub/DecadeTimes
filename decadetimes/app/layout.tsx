import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/Navbar";
import Drawer from "../components/ui/Drawer";
import Footer from "@/components/ui/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Decade Times",
  description: "Design and developed by Jude Ogbonna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-cols-6 gap-2 ">
          <div className="col-start-1 col-end-7 ...">AVD</div>
          <div className="col-start-1 col-end-7 ..."><Navbar /></div>
          <div className="col-start-1 col-end-7 p-4 ...">{children}</div>
          <div className="col-start-1 col-end-7 ...">AVD</div>
          <div className="col-start-1 col-end-7 ..."><Footer /></div>
        </div>
      </body>
    </html>
  );
}
