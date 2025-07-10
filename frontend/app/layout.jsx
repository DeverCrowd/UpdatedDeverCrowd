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
    <html lang="en">
      <body className="font-code">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
