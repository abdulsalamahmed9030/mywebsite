import { servicesDetails } from "@/src/data/servicesDetails";
import type { Metadata } from "next";
import ServiceDetailClient from "./ServiceDetailClient";

// ✅ SSG: Pre-generate all paths
export async function generateStaticParams() {
  return Object.keys(servicesDetails).map((slug) => ({ slug }));
}

// ✅ Metadata: Typed inline only (don't import any PageProps!)
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = servicesDetails[params.slug];

  if (!service?.seo) {
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
          url: "/default-og-image.jpg",
          width: 1200,
          height: 630,
          alt: service.seo.title,
        },
      ],
    },
  };
}

// ✅ Page: Also typed inline (not custom types)
export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  return <ServiceDetailClient slug={params.slug} />;
}
