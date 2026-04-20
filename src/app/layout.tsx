import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@belajar/components";
import { StartFieldCanvas } from "@belajar/components";
import StarfieldCanvas from "components/StartFieldCanvas";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Dimas Portfolio",
  description: "Backend Developer Portfolio - NestJS, Golang, PostgreSQL",
  openGraph: {
    title: "Dimas Portfolio",
    description: "Backend Developer",
    url: "https://profile-dimas.vercel.app",
    siteName: "Dimas Portfolio",
    images: [
      {
        url: "/vercel.svg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="SBB8fL_QJUqZDY_-ndr6PjM8wJF-17Q72SFwU9WUU-c" />
      <body className={`antialiased`}>
        <StarfieldCanvas />
        {/* <Header /> */}
        {/* <main style={{ position: "relative", zIndex: 1 }}>{children}</main> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
