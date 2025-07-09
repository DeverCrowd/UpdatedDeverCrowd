import {  JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";


const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrainsMono",
  display: "swap",
});

export const metadata = {
  title: "DeverCrowd",
  description: "DeverCrowd Built this site for empowering Web development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="font-code">
        <div className="fixed -z-10 inset-0">
        <Image
          className="bg-cover object-cover bg-center"
          alt="bg"
          src="/bgs/bg13.webp"
          fill
        />
      </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
