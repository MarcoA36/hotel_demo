import { HotelHeader } from '@/components/hotel-header'
import { HeroSection } from '@/components/hero-section'
import { RoomsSection } from '@/components/rooms-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { ContactSection } from '@/components/contact-section'
import { HotelFooter } from '@/components/hotel-footer'

export default function Page() {
  return (
    <div className="min-h-screen">
      <HotelHeader />
      <main>
        <HeroSection />
        <RoomsSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <HotelFooter />
    </div>
  )
}
