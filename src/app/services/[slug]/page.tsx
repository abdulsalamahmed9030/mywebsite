import { servicesDetails } from "@/src/data/servicesDetails";
import type { Metadata } from "next";
import ServiceDetailClient from "./ServiceDetailClient";

interface Props {
  params: {
    slug: string;
  };
}

// ✅ 1. Static Params for Pre-rendering
export async function generateStaticParams() {
  return Object.keys(servicesDetails).map((slug) => ({ slug }));
}

// ✅ 2. SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicesDetails[params.slug];

  if (!service || !service.seo) {
    return {
      title: "Service Not Found | Task Force Interior",
      description: "The requested service could not be found.",
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
          url: "/default-og-image.jpg", // optional: dynamic image if available
          width: 1200,
          height: 630,
          alt: service.seo.title,
        },
      ],
    },
  };
}

// ✅ 3. Page Component
export default function ServiceDetailPage({ params }: Props) {
  return <ServiceDetailClient slug={params.slug} />;
}
