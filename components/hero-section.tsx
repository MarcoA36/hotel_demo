"use client"
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const image =
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80"

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* MOBILE: imagen + overlay */}
      <div
        className="absolute inset-0 lg:hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* DESKTOP */}
      <div className="relative z-10 grid lg:grid-cols-2 min-h-screen">

        {/* IMAGEN con DEGRADE */}
        <div className="hidden lg:block relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />

          {/* 👉 degrade hacia el contenido */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        </div>

        {/* CONTENIDO */}
        <div className="flex items-center justify-center px-6 lg:px-16 text-center lg:text-left">
          <div className="max-w-xl">

            <h1 className="font-serif text-5xl md:text-7xl lg:text-6xl text-white lg:text-black mb-6 leading-tight">
              Tu lugar para descansar
            </h1>

            <p className="text-xl md:text-2xl text-white/85 lg:text-gray-600 mb-10 leading-relaxed">
              Descubre un refugio donde la elegancia atemporal se encuentra con el confort moderno.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">

              <a href="#habitaciones">
                <Button size="lg" className="px-8">
                  Explorar Habitaciones
                </Button>
              </a>

              <a href="#galeria">
                <Button
                  size="lg"
                  variant="outline"
                  className="lg:text-black lg:border-black"
                >
                  Ver Galería
                </Button>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}