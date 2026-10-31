import { redirect } from "next/navigation";

export function generateStaticParams() {
  return [
    { slug: "mastering-ielts-band-8-action-plan-2026" },
  ];
}

export default function BlogSlugPage({ params }: { params: { slug: string } }) {
  redirect("/resources/" + params.slug);
}
