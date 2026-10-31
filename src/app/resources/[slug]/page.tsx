import ArticleDetailPageClient from "@/components/resources/ArticleDetailPageClient";

export function generateStaticParams() {
  return [
    { slug: "mastering-ielts-band-8-action-plan-2026" },
  ];
}

export default function Page({ params }: { params: { slug: string } }) {
  return <ArticleDetailPageClient slug={params.slug} />;
}
