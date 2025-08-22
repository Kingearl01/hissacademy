import type React from "react";
import type { Metadata } from "next";
import { Work_Sans, Open_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hissacademy.netlify.app"),
  title: "HISS Academy - Nurturing Future Football Stars in Ghana",
  description:
    "HISS Football Club Academy in Nkawkaw Abepotia, Ghana - Developing young football talent aged 8-15 to become national and global assets in football.",
  alternates: { canonical: "/" },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#101010" },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    title: "HISS Academy - Nurturing Future Football Stars in Ghana",
    description:
      "HISS Football Club Academy in Nkawkaw Abepotia, Ghana - Developing young football talent aged 8-15.",
    url: "https://hissacademy.netlify.app/",
    images: [
      {
        url: "/og-image.png", // add this file to /public
        width: 1200,
        height: 630,
        alt: "HISS Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HISS Academy - Nurturing Future Football Stars in Ghana",
    description:
      "HISS Football Club Academy in Nkawkaw Abepotia, Ghana - Developing young football talent aged 8-15.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      "/favicon.ico",
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${openSans.variable} antialiased`}
    >
          <head>
        <meta name="theme-color" content="#101010" />
        <meta property="og:title" content="HISS Academy - Nurturing Future Football Stars in Ghana" />
        <meta property="og:description" content="HISS Football Club Academy in Nkawkaw Abepotia, Ghana - Developing young football talent aged 8-15 to become national and global assets in football." />
        {/* Add more meta tags as needed */}
      
       {/* Structured data for SEO / knowledge panel */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HISS Academy",
              url: "https://hissacademy.netlify.app",
              logo: "https://hissacademy.netlify.app/apple-touch-icon.png",
              sameAs: [
                "https://www.facebook.com/hissacademyfootballclub",
                "https://youtube.com/@hissacademyfootballclub",
                "https://wa.me/233596084542",
              ],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider defaultTheme="dark" storageKey="hiss-ui-theme">
          <main className="min-h-screen bg-background">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
