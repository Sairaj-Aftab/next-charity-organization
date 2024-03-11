import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CtaSection from "@/components/CtaSection";
import HeroSection from "@/components/HeroSection";
import NewsListing from "@/components/NewsListing";
import NewsSection from "@/components/NewsSection";
import OurStorySection from "@/components/OurStorySection";
import Section1 from "@/components/Section1";
import TestimonialSection from "@/components/TestimonialSection";
import VolunterFormSection from "@/components/VolunterFormSection";
import CauseSection from "@/components/CauseSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Section1 />
      <OurStorySection />
      <AboutSection />
      <CtaSection />
      <CauseSection />
      <VolunterFormSection />
      <NewsListing title="Latest News" />
      {/* <TestimonialSection /> */}
      <ContactSection />
    </main>
  );
}
