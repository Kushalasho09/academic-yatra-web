import PackageDetailPageClient from "@/components/package-detail/PackageDetailPageClient";

export function generateStaticParams() {
  return [
    { slug: "ielts-academic" },
    { slug: "ielts-general" },
    { slug: "pte-academic" },
    { slug: "pte-core" },
    { slug: "toefl-ibt" },
    { slug: "duolingo-det" },
    { slug: "celpip-prep" },
    { slug: "french-prep" },
    { slug: "german-prep" },
    { slug: "spoken-english" },
  ];
}

export default function Page({ params }: { params: { slug: string } }) {
  return <PackageDetailPageClient slug={params.slug} />;
}
