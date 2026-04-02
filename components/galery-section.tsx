"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export function Gallery() {
  const [index, setIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [visible, setVisible] = useState(3)

  const startX = useRef(0)
  const isDragging = useRef(false)

  const images = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80",
  ]

  // 🔥 responsive real
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(1)
      else if (window.innerWidth < 1024) setVisible(2)
      else setVisible(3)
    }

    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const maxIndex = Math.max(0, images.length - visible)

  const next = () => index < maxIndex && setIndex(index + 1)
  const prev = () => index > 0 && setIndex(index - 1)

  // 🔥 swipe / drag
  const handleStart = (x: number) => {
    isDragging.current = true
    startX.current = x
  }

  const handleMove = (x: number) => {
    if (!isDragging.current) return

    const diff = startX.current - x

    if (Math.abs(diff) > 50) {
      if (diff > 0) next()
      else prev()
      isDragging.current = false
    }
  }

  const handleEnd = () => {
    isDragging.current = false
  }

  return (
    <section id="galeria" className="py-20 bg-gray-50">

      {/* HEADER */}
      {/* <div className="text-center mb-12">
        <h2 className="text-4xl font-serif mb-4">Galería</h2>
        <p className="text-gray-600">
          Descubrí cada rincón de nuestro espacio
        </p>
      </div> */}

      {/* CAROUSEL */}
      <div
        className="relative overflow-hidden max-w-6xl mx-auto"
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        {/* flecha izquierda */}
        {index > 0 && (
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow"
          >
            <ChevronLeft />
          </button>
        )}

        {/* flecha derecha */}
        {index < maxIndex && (
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow"
          >
            <ChevronRight />
          </button>
        )}

        {/* track */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${index * (100 / visible)}%)`,
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`flex-shrink-0 ${
                visible === 1
                  ? "w-full"
                  : visible === 2
                  ? "w-1/2"
                  : "w-1/3"
              } p-2`}
            >
              <div
                onClick={() => setSelectedIndex(i)}
                className="h-[220px] md:h-[260px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 MODAL PERFECTO */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* cerrar */}
            <button
              className="absolute top-6 right-6 text-white z-20"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={32} />
            </button>

            {/* izquierda */}
            <button
              onClick={() =>
                setSelectedIndex(
                  selectedIndex === 0
                    ? images.length - 1
                    : selectedIndex - 1
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-20"
            >
              <ChevronLeft size={40} />
            </button>

            {/* derecha */}
            <button
              onClick={() =>
                setSelectedIndex((selectedIndex + 1) % images.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-20"
            >
              <ChevronRight size={40} />
            </button>

            {/* imagen centrada PERFECTA */}
            <div className="w-full h-full flex items-center justify-center p-4">
              <img
                src={images[selectedIndex]}
                alt=""
                className="max-w-full max-h-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}