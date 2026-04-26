import type { Metadata } from "next";
import { Cinzel, Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "DiabloIV_Millennial — Sanctuary Streamer",
  description:
    "YouTube, Twitch, TikTok and more — all the realms where DiabloIV_Millennial wanders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0606] text-[#e6dfd5]">
        {children}
      </body>
    </html>
  );
}
