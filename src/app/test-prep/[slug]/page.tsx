import PackageDetailPageClient from "@/components/package-detail/PackageDetailPageClient";

export function generateStaticParams() {
  return [
    { slug: "sat-digital" },
    { slug: "gre-general" },
    { slug: "gmat-focus" },
    { slug: "combo-masters" },
    { slug: "sat-booster" },
    { slug: "executive-mba" },
  ];
}

export default function Page({ params }: { params: { slug: string } }) {
  return <PackageDetailPageClient slug={params.slug} />;
}
