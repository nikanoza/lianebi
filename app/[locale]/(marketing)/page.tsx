import Authority from "@/components/sections/Authority";
import BlogPreview from "@/components/sections/BlogPreview";
import FinalCTA from "@/components/sections/FinalCTA";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";

export default async function asyncHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <Hero />
      <Authority />
      <HowItWorks />
      <BlogPreview locale={locale} />
      <FinalCTA />
    </>
  );
}
