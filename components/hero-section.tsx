import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-muted">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/10" />
      
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-6 leading-tight text-balance">
          Experiencia de lujo <br />en armonía perfecta
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          {'Descubre un refugio donde la elegancia atemporal se encuentra con el confort moderno. Hotel Sereno te invita a vivir momentos inolvidables.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
            Explorar Habitaciones
          </Button>
          <Button size="lg" variant="outline" className="border-foreground/20 hover:bg-foreground/5">
            Ver Galería
          </Button>
        </div>
      </div>

      <a 
        href="#habitaciones" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll to rooms"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
