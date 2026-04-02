import { Award, Heart, Shield, Users } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Hospitalidad',
    description: 'Nuestro compromiso es hacer que cada huésped se sienta como en casa, brindando un servicio cálido y personalizado.',
  },
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Nos esforzamos por superar las expectativas en cada detalle, desde la decoración hasta el servicio.',
  },
  {
    icon: Shield,
    title: 'Confianza',
    description: 'La seguridad y privacidad de nuestros huéspedes son nuestra máxima prioridad.',
  },
  {
    icon: Users,
    title: 'Equipo',
    description: 'Contamos con un equipo profesional y apasionado, dedicado a crear experiencias memorables.',
  },
]

export function AboutSection() {
  return (
    <section id="sobre-nosotros" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagen */}
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80"
                alt="Hotel Sereno"
                className="w-full h-full object-cover"
              />
            </div>
            {/* <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg -z-10" /> */}
          </div>

          {/* Contenido */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 text-balance">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Desde 2010, Hotel Sereno ha sido sinónimo de elegancia, confort y hospitalidad excepcional. 
              Ubicados en el corazón de la ciudad, ofrecemos a nuestros huéspedes una experiencia única 
              que combina el lujo moderno con el servicio personalizado de antaño.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nuestra filosofía se basa en crear momentos inolvidables para cada visitante. Ya sea que 
              viajes por negocios o placer, nuestro equipo está dedicado a asegurar que tu estadía 
              supere todas tus expectativas.
            </p>

            {/* Valores */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon size={24} className="text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
