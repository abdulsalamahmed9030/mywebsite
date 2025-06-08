import { servicesDetails } from "../../../data/servicesDetails";
import type { Metadata } from "next";
import ServiceDetailClient from "./ServiceDetailClient";

interface Params {
  slug: string;
}

interface Props {
  params: Promise<Params>;  // params is Promise here
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesDetails[resolvedParams.slug];
  if (!service || !service.seo) {
    return {
      title: "Service Not Found - YourSiteName",
      description: "The requested service could not be found.",
    };
  }
  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
  };
}

// Make this async and await params here as well
export default async function ServiceDetailPage({ params }: Props) {
  const resolvedParams = await params;
  return <ServiceDetailClient slug={resolvedParams.slug} />;
}
