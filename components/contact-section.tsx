'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { MapPin, Phone, Mail } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 text-balance">
            Contáctanos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {'Estamos aquí para ayudarte. Envíanos un mensaje y nos pondremos en contacto contigo pronto.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground">Nombre Completo</Label>
                <Input 
                  id="name" 
                  placeholder="Tu nombre" 
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-foreground">Teléfono</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+1 234 567 890" 
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-foreground">Mensaje</Label>
                <Textarea 
                  id="message" 
                  placeholder="Cuéntanos cómo podemos ayudarte..." 
                  className="mt-2 min-h-32"
                />
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Enviar Mensaje
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Dirección</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Avenida Principal 123<br />
                      Ciudad Capital, 10001
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Teléfono</p>
                    <p className="text-muted-foreground">+1 (234) 567-8900</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <p className="text-muted-foreground">reservas@hotelsereno.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-sm">
              <h4 className="font-semibold text-foreground mb-2">Horario de Atención</h4>
              <p className="text-muted-foreground leading-relaxed">
                Recepción 24/7<br />
                Restaurante: 7:00 - 23:00<br />
                Bar: 17:00 - 02:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
