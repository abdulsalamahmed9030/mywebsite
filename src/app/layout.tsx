import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bizoradev.com"),
  title: {
    default: "Bizora — Web Development Agency in India",
    template: "%s | Bizora",
  },
  description:
    "Bizora is a full-service web development agency specializing in modern, SEO-optimized websites using Next.js, React, and MERN stack.",
  keywords: [
    "web development company",
    "Next.js developer India",
    "React agency",
    "SEO website design",
    "MERN stack development",
    "Bizora web agency",
  ],
  openGraph: {
    title: "Bizora — Web Development Agency in India",
    description:
      "We build high-performance, SEO-ready websites using Next.js, React, and MERN stack. Launch your digital presence with Bizora.",
    url: "https://bizoradev.com",
    siteName: "Bizora",
    images: [
      {
        url: "/og-image.jpg", // ✅ Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "Bizora Web Development",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bizora — Web Development Company",
    description:
      "Build fast, modern, and SEO-optimized websites with Bizora — India's trusted Next.js and React agency.",
    images: ["/og-image.jpg"], // ✅ Same as above
  },
  authors: [
    { name: "Bizora Team", url: "https://bizoradev.com/about" },
  ],
  creator: "Bizora Web Agency",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
