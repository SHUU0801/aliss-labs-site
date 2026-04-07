import { notFound } from "next/navigation";
import DesignShowcasePage from "@/components/pages/designs/DesignShowcasePage";
import { designDirections, type DesignSlug } from "@/components/pages/designs/design-data";

export function generateStaticParams() {
  return designDirections.map((direction) => ({ slug: direction.slug }));
}

export default async function DesignDirectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exists = designDirections.some((direction) => direction.slug === slug);

  if (!exists) {
    notFound();
  }

  return <DesignShowcasePage slug={slug as DesignSlug} />;
}
