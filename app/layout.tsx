import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'

import './globals.css'
import DemoBadge from '@/components/DemoBadge'

const cormorant = Cormorant_Garamond({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
title: 'Hotel Sereno - Lujo y Confort',
  description: 'Experimenta la hospitalidad de clase mundial en Hotel Sereno. Habitaciones elegantes, servicios excepcionales y una ubicación privilegiada.',
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <DemoBadge/>
        </body>
    </html>
  )
}
