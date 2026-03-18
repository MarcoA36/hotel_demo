import { Utensils, Wifi, Waves, Dumbbell, Car, Coffee } from 'lucide-react'

const services = [
  {
    icon: Utensils,
    title: 'Restaurante Gourmet',
    description: 'Cocina internacional y local preparada por chefs de renombre.',
  },
  {
    icon: Wifi,
    title: 'WiFi de Alta Velocidad',
    description: 'Conexión gratuita en todas las áreas del hotel.',
  },
  {
    icon: Waves,
    title: 'Piscina Infinity',
    description: 'Piscina panorámica con vistas espectaculares.',
  },
  {
    icon: Dumbbell,
    title: 'Gimnasio 24/7',
    description: 'Equipamiento moderno disponible todo el día.',
  },
  {
    icon: Car,
    title: 'Servicio de Transporte',
    description: 'Traslados al aeropuerto y tours por la ciudad.',
  },
  {
    icon: Coffee,
    title: 'Bar & Lounge',
    description: 'Cócteles artesanales en ambiente sofisticado.',
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 text-balance">
            Servicios & Amenidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Disfruta de una experiencia completa con nuestras instalaciones y servicios de primera clase.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index} 
                className="bg-background p-8 rounded-sm border border-border hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
