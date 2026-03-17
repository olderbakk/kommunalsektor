import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
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

export const metadata: Metadata = {
  title: "KommunalSektor — Eit nytt operativsystem for kommunane",
  description:
    "Erfaringar, rammeverk og inspirasjon for kommunar som vil gjere noko anna. Frå praksis, ikkje skrivebordsøvingar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nn">
      <body
        className={`${cormorant.variable} ${dmSans.variable} antialiased`}
        style={{
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
