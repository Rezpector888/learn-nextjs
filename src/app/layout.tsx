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
  metadataBase: new URL("https://profile-dimas.vercel.app"),

  title: "Dimas Iqbal Nugraha Portfolio",
  description:
    "Backend Developer Portfolio Dimas Iqbal Nugraha - NestJS, Golang, PostgreSQL",

  keywords: [
    "Dimas Iqbal Nugraha",
    "Backend Developer",
    "NestJS Developer",
    "Golang Developer",
    "PostgreSQL",
    "Portfolio Backend Developer",
  ],

  authors: [{ name: "Dimas Iqbal Nugraha" }],
  creator: "Dimas Iqbal Nugraha",

  openGraph: {
    title: "Dimas Iqbal Nugraha Portfolio",
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
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dimas Iqbal Nugraha Portfolio",
    description: "Backend Developer",
    images: ["/vercel.svg"],
  },

  robots: {
    index: true,
    follow: true,
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
