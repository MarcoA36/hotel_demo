import { HotelHeader } from "@/components/hotel-header";
import { HeroSection } from "@/components/hero-section";
import { RoomsSection } from "@/components/rooms-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";
import { HotelFooter } from "@/components/hotel-footer";
import { Gallery } from "@/components/galery-section";

export default function Page() {
  return (
    <div className="min-h-screen">
      <HotelHeader />
      <main>
        <HeroSection />

        <ServicesSection />
        <div className="hidden md:block h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16" />
        <RoomsSection />

        <div className="hidden md:block h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16" />

        <AboutSection />
        {/* <Gallery /> */}
        <ContactSection />
      </main>
      <HotelFooter />
    </div>
  );
}
