import ComingSoon from "@/components/ComingSoon";

export function generateStaticParams() {
  return [
    { coming_soon: ["languages"] },
    { coming_soon: ["test-prep"] },
    { coming_soon: ["skill-catalyst"] },
    { coming_soon: ["free-resources"] },
    { coming_soon: ["about-us"] },
    { coming_soon: ["contacts"] },
    { coming_soon: ["blogs"] },
    { coming_soon: ["faq"] },
    { coming_soon: ["privacy-policy"] },
    { coming_soon: ["terms"] },
    { coming_soon: ["refund-policy"] },
  ];
}

export default function CatchAllComingSoonPage({
  params,
}: {
  params: { coming_soon: string[] };
}) {
  const path = params.coming_soon ? params.coming_soon.join("/") : "coming-soon";
  const formattedTitle = path
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return <ComingSoon pageTitle={`${formattedTitle} — Module In Development`} />;
}
