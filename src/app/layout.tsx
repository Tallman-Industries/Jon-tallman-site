import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { RESUME_DATA } from "@/data/resume";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jon-tallman-site.fly.dev"),
  title: "Jon Tallman — Product, Strategy, Fractional",
  description: RESUME_DATA.intro,
  openGraph: {
    title: "Jon Tallman — Product, Strategy, Fractional",
    description: RESUME_DATA.intro,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexMono.variable}`}
    >
      <body data-theme="document">{children}</body>
    </html>
  );
}
