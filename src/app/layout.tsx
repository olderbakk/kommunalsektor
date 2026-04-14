import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteTitle = "KommunalSektor — Eit nytt operativsystem for kommunane";
const siteDescription =
  "Erfaringar, rammeverk og inspirasjon for kommunar som vil gjere noko anna. Frå praksis, ikkje skrivebordsøvingar.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "https://kommunalsektor.vercel.app"),
  ),
  title: {
    default: siteTitle,
    template: "%s — KommunalSektor",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "nn_NO",
    siteName: "KommunalSektor",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nn">
      <body
        className={`${fraunces.variable} ${dmSans.variable} antialiased`}
        style={{
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
        }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
