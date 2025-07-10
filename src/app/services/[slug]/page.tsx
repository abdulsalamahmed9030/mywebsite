import { servicesDetails } from "@/src/data/servicesDetails";
import type { Metadata } from "next";
import ServiceDetailClient from "./ServiceDetailClient";

// ✅ Define types
interface Props {
  params: {
    slug: string;
  };
}

// ✅ 1. Pre-render all dynamic routes (SSG)
export async function generateStaticParams() {
  return Object.keys(servicesDetails).map((slug) => ({ slug }));
}

// ✅ 2. SEO metadata per service
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicesDetails[params.slug];

  if (!service || !service.seo) {
    return {
      title: "Service Not Found | Task Force Interior",
      description: "The requested service could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      images: [
        {
          url: "/default-og-image.jpg", // Replace with service-specific image if available
          width: 1200,
          height: 630,
          alt: service.seo.title,
        },
      ],
    },
    alternates: {
      canonical: `https://yourdomain.com/services/${params.slug}`, // 🔁 Replace with your actual domain
    },
  };
}

// ✅ 3. Page component (NOT async, no duplicate)
export default function ServiceDetailPage({ params }: Props) {
  return <ServiceDetailClient slug={params.slug} />;
}
