// ❌ DO NOT put "use client" here — it must stay server-side

// ✅ SEO metadata for the About page
export const metadata = {
  title: "About Us | BizoraDev – Web Design, SEO & Google Business Experts",
  description:
    "Learn about BizoraDev – a full-service web agency offering custom website design, SEO, and Google Business Profile management. We help businesses grow online and locally.",
  keywords: [
    "BizoraDev",
    "Web Design Company",
    "Next.js Development",
    "MERN Stack",
    "SEO Services",
    "Google Business Profile Management",
    "Website Performance Optimization",
  ],
};

// ✅ Import your actual client-side UI
import AboutClient from "./AboutClient";

export default function AboutPage() {
  return <AboutClient />;
}
