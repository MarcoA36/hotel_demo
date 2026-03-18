'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Bed, Users, Maximize, Wifi, Tv, Coffee, Wind, Bath, Check } from 'lucide-react'
import { useState } from 'react'

interface Room {
  name: string
  description: string
  size: string
  capacity: string
  beds: string
  price: string
  images: string[]
  amenities: string[]
  longDescription: string
}

interface RoomDetailModalProps {
  room: Room
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function RoomDetailModal({ room, open, onOpenChange }: RoomDetailModalProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-3xl font-semibold text-foreground">
            {room.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Galería de Imágenes */}
          <div className="space-y-4">
            <div className="aspect-video relative overflow-hidden rounded-lg bg-muted">
              <img
                src={room.images[selectedImage]}
                alt={`${room.name} - Imagen ${selectedImage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {room.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-video relative overflow-hidden rounded-md border-2 transition-all ${
                    selectedImage === index
                      ? 'border-primary'
                      : 'border-transparent hover:border-border'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Descripción Completa */}
          <div>
            <p className="text-muted-foreground leading-relaxed">
              {room.longDescription}
            </p>
          </div>

          {/* Especificaciones */}
          <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
            <div className="flex items-center gap-2">
              <Maximize size={20} className="text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Tamaño</p>
                <p className="font-medium text-foreground">{room.size}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} className="text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Capacidad</p>
                <p className="font-medium text-foreground">{room.capacity}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Bed size={20} className="text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Cama</p>
                <p className="font-medium text-foreground">{room.beds}</p>
              </div>
            </div>
          </div>

          {/* Amenidades */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
              Amenidades Incluidas
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {room.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check size={16} className="text-primary" />
                  <span className="text-foreground">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Precio y Reserva */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div>
              <span className="text-sm text-muted-foreground">Desde</span>
              <p className="font-serif text-3xl font-semibold text-foreground">
                {room.price}
                <span className="text-base font-normal text-muted-foreground">/noche</span>
              </p>
            </div>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Reservar Ahora
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
