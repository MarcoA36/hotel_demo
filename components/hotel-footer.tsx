import { Facebook, Instagram, Twitter } from 'lucide-react'

export function HotelFooter() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">HOTEL SERENO</h3>
            <p className="text-background/70 leading-relaxed">
              Experiencia de lujo en armonía perfecta
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-background/70 hover:text-background transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#habitaciones" className="text-background/70 hover:text-background transition-colors">
                  Habitaciones
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-background/70 hover:text-background transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-background/70 hover:text-background transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Políticas</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Política de Cancelación
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-sm flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-sm flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-sm flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70 text-sm">
          <p>© 2024 Hotel Sereno. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
