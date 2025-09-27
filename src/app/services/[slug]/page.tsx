import { servicesDetails } from "@/data/servicesDetails";
import type { Metadata } from "next";
import ServiceDetailClient from "./ServiceDetailClient";

// ✅ Dynamic params type inferred inline (no PageProps!)
export const generateStaticParams = async () => {
  return Object.keys(servicesDetails).map((slug) => ({ slug }));
};

// ✅ Metadata — define `params` type inline
export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const service = servicesDetails[params.slug];
  if (!service) {
    return {
      title: "Service Not Found | RMG Solutions",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: service.seo?.title || "RMG Solutions",
    description: service.seo?.description || "",
    keywords: service.seo?.keywords || "",
  };
};

// ✅ Page Component — no separate type
export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  return <ServiceDetailClient slug={params.slug} />;
}
