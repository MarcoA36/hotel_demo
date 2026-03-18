// import { Button } from '@/components/ui/button'
// import { ChevronDown } from 'lucide-react'

// export function HeroSection() {
//   return (
//     <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-muted">
//       <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/10" />
      
//       <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
//         <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-6 leading-tight text-balance">
//           Experiencia de lujo <br />en armonía perfecta
//         </h1>
        
//         <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
//           {'Descubre un refugio donde la elegancia atemporal se encuentra con el confort moderno. Hotel Sereno te invita a vivir momentos inolvidables.'}
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
//             Explorar Habitaciones
//           </Button>
//           <Button size="lg" variant="outline" className="border-foreground/20 hover:bg-foreground/5">
//             Ver Galería
//           </Button>
//         </div>
//       </div>

//       <a 
//         href="#habitaciones" 
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-foreground transition-colors animate-bounce"
//         aria-label="Scroll to rooms"
//       >
//         <ChevronDown size={32} />
//       </a>
//     </section>
//   )
// }

"use client"
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
 const images = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80', // exterior
  'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1600&q=80', // habitación
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&q=80', // lobby/desayuno
]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000) // cambia cada 5s

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Overlay */}
     <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <h1 className="font-serif  text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
         Tu lugar para descansar
        </h1>
        
        {/* <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
          Descubre un refugio donde la elegancia atemporal se encuentra con el confort moderno.
        </p> */}
        <p className="text-xl md:text-2xl text-white/85 max-w-xl mx-auto mb-10 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
  Descubre un refugio donde la elegancia atemporal se encuentra con el confort moderno.
</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="px-8">
            Explorar Habitaciones
          </Button>
          <Button size="lg" variant="outline" className=" hover:bg-white/10">
            Ver Galería
          </Button>
        </div>
      </div>

      {/* Scroll icon */}
      <a 
        href="#habitaciones" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}