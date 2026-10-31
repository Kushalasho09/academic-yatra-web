import PackageDetailPageClient from "@/components/package-detail/PackageDetailPageClient";

export function generateStaticParams() {
  return [
    { slug: "skill-catalyst-combo" },
    { slug: "career-essentials" },
    { slug: "gsuite-hub" },
    { slug: "bizz-tech" },
  ];
}

export default function Page({ params }: { params: { slug: string } }) {
  return <PackageDetailPageClient slug={params.slug} />;
}
