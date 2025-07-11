import React from 'react';
import Header from '../components/header';
import OurServices from '../components/OurServices';
import Footer from '../components/Footer';

// ✅ SEO Metadata for /services page
export const metadata = {
  title: "Our Services | BizoraDev – Web Design, SEO & Local Growth Experts",
  description:
    "Explore BizoraDev’s complete range of services including website design, development, SEO, Google Business Profile optimization, and performance tuning to grow your business online and locally.",
  keywords: [
    "BizoraDev Services",
    "Website Design",
    "Web Development",
    "SEO Company India",
    "Google Business Profile Management",
    "Performance Optimization",
    "MERN Stack Agency",
    "Next.js Web Agency",
  ],
  openGraph: {
    title: "Our Services | BizoraDev",
    description:
      "Explore our services including website design, SEO, and Google profile management to grow your business online.",
    url: "https://www.bizoradev.com/services",
    siteName: "BizoraDev",
    type: "website",
    images: [
      {
        url: "/default-og-image.jpg", // replace with actual OG image path if needed
        width: 1200,
        height: 630,
        alt: "BizoraDev Services",
      },
    ],
  },
  alternates: {
    canonical: "https://www.bizoradev.com/services",
  },
};

const page = () => {
  return (
    <>
      <Header />
      <div className="pt-14">
        <OurServices />
      </div>
      <Footer />
    </>
  );
};

export default page;
