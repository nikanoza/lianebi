import Authority from "@/components/sections/Authority";
import BlogPreview from "@/components/sections/BlogPreview";
import FinalCTA from "@/components/sections/FinalCTA";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";

export default function Home() {
  return (
    <>
      <Hero />
      <Authority />
      <HowItWorks />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}
