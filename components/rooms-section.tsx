'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Bed, Users, Maximize } from 'lucide-react'
import { RoomDetailModal } from './room-detail-modal'
import { useState } from 'react'

const rooms = [
  {
    name: 'Suite Ejecutiva',
    description: 'Espaciosa suite con vistas panorámicas y área de trabajo dedicada.',
    longDescription: 'Nuestra Suite Ejecutiva es perfecta para viajeros de negocios que buscan comodidad y funcionalidad. Con un diseño contemporáneo, cuenta con una amplia área de trabajo, zona de estar separada y ventanales que ofrecen vistas espectaculares de la ciudad. Los acabados premium y la decoración minimalista crean un ambiente propicio para la productividad y el descanso.',
    size: '45 m²',
    capacity: '2 personas',
    beds: 'Cama King',
    price: '$250',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    ],
    amenities: [
      'Wi-Fi de alta velocidad',
      'Smart TV 55"',
      'Minibar premium',
      'Cafetera Nespresso',
      'Aire acondicionado',
      'Baño de mármol',
      'Escritorio ejecutivo',
      'Caja fuerte digital',
    ],
  },
  {
    name: 'Habitación Deluxe',
    description: 'Elegante habitación con balcón privado y acabados de lujo.',
    longDescription: 'La Habitación Deluxe combina elegancia y confort en un espacio perfectamente diseñado. Su balcón privado te permite disfrutar de momentos de tranquilidad mientras contemplas las vistas. Los acabados de primera calidad, la iluminación cuidadosamente estudiada y los detalles refinados hacen de esta habitación el refugio ideal para parejas o viajeros que buscan una experiencia superior.',
    size: '35 m²',
    capacity: '2 personas',
    beds: 'Cama Queen',
    price: '$180',
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80',
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
    ],
    amenities: [
      'Balcón privado',
      'Wi-Fi gratuito',
      'Smart TV 48"',
      'Minibar',
      'Cafetera',
      'Aire acondicionado',
      'Baño con ducha lluvia',
      'Servicio a la habitación 24h',
    ],
  },
  {
    name: 'Suite Presidencial',
    description: 'Nuestra suite más exclusiva con sala de estar, comedor y jacuzzi.',
    longDescription: 'La Suite Presidencial representa el máximo exponente del lujo y la exclusividad. Con 80 metros cuadrados de espacio exquisitamente diseñado, esta suite cuenta con áreas separadas para dormir, trabajar y entretenimiento. El jacuzzi privado, la sala de estar con sofás de diseño, el comedor para cuatro personas y los acabados de altísima gama la convierten en la elección perfecta para ocasiones especiales y huéspedes que buscan lo excepcional.',
    size: '80 m²',
    capacity: '4 personas',
    beds: 'Cama King + Sofá Cama',
    price: '$450',
    images: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?w=800&q=80',
      'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=800&q=80',
    ],
    amenities: [
      'Jacuzzi privado',
      'Sala de estar separada',
      'Comedor para 4 personas',
      'Smart TV 65" + Sistema de sonido',
      'Bar completo',
      'Cafetera Nespresso Premium',
      'Baño de mármol con bañera',
      'Terraza privada',
      'Mayordomía 24h',
      'Check-in privado',
    ],
  },
]

export function RoomsSection() {
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewDetails = (room: typeof rooms[0]) => {
    setSelectedRoom(room)
    setIsModalOpen(true)
  }

  return (
    <>
      <section id="habitaciones" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 text-balance">
              Nuestras Habitaciones
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Cada habitación está cuidadosamente diseñada para ofrecerte el máximo confort y elegancia durante tu estancia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card key={index} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    {room.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {room.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Maximize size={16} className="text-primary" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Users size={16} className="text-primary" />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Bed size={16} className="text-primary" />
                      <span>{room.beds}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-muted-foreground">Desde</span>
                        <p className="font-serif text-2xl font-semibold text-foreground">{room.price}<span className="text-sm font-normal">/noche</span></p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => handleViewDetails(room)}
                      >
                        Ver Detalles
                      </Button>
                      <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                        Reservar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedRoom && (
        <RoomDetailModal
          room={selectedRoom}
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
        />
      )}
    </>
  )
}
