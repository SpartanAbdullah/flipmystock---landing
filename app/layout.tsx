import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flipmystock.com"),
  title: "FlipMyStock.com | Premium Fintech Domain for Acquisition",
  description:
    "flipmystock.com is a brandable .com domain available for purchase, ideal for fintech, AI investing, trading tools, and market intelligence products.",
  applicationName: "FlipMyStock.com",
  keywords: [
    "flipmystock.com",
    "domain for sale",
    "premium domain",
    "fintech domain",
    "trading brand",
    "AI investing domain"
  ],
  alternates: {
    canonical: "https://flipmystock.com"
  },
  openGraph: {
    title: "FlipMyStock.com | Premium Fintech Domain for Acquisition",
    description:
      "A memorable .com domain for fintech, AI investing, trading tools, and market intelligence brands. Available for acquisition.",
    url: "https://flipmystock.com",
    siteName: "FlipMyStock.com",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "FlipMyStock.com | Premium Fintech Domain for Acquisition",
    description:
      "Brandable .com domain available for acquisition for fintech, trading, and AI investing products."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} bg-[#050816] text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

