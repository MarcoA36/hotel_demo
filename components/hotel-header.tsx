'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HotelHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="font-serif text-2xl font-semibold tracking-tight text-foreground">
            HOTEL SERENO
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#habitaciones" className="text-sm text-foreground hover:text-primary transition-colors">
              Habitaciones
            </a>
            <a href="#servicios" className="text-sm text-foreground hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#contacto" className="text-sm text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Reservar Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a 
                href="#inicio" 
                className="text-sm text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#habitaciones" 
                className="text-sm text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Habitaciones
              </a>
              <a 
                href="#servicios" 
                className="text-sm text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a 
                href="#contacto" 
                className="text-sm text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Reservar Ahora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
