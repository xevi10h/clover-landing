import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#f5f0e8] flex items-center">
        <div className="max-w-[1200px] mx-auto px-12 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 max-w-xl">
              <h1 className="text-[80px] font-extralight tracking-[0.15em] text-[#2d2d2d] leading-none mb-6">
                CLOVER
              </h1>
              <h2 className="text-[48px] font-light text-[#7a9370] leading-tight">
                Descubre tu estilo atemporal
              </h2>
              <p className="text-xl text-[#6b6b6b] leading-relaxed font-light">
                Moda consciente y única en el corazón del Eixample. Cada pieza cuenta una historia.
              </p>

              <div className="flex gap-4 pt-4">
                <button className="px-10 py-4 bg-[#9caf88] text-white font-medium tracking-widest hover:bg-[#7a9370] transition-all duration-300">
                  VISITAR TIENDA
                </button>
                <button className="px-10 py-4 border-2 border-[#9caf88] text-[#9caf88] font-medium tracking-widest hover:bg-[#9caf88] hover:text-white transition-all duration-300">
                  VER COLECCIÓN
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[700px] w-full">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
                  alt="CLOVER Boutique"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-12">
          <div className="text-center mb-20">
            <h2 className="text-[56px] font-light tracking-wide text-[#2d2d2d] mb-6">
              Nuestra filosofía
            </h2>
            <p className="text-2xl text-[#6b6b6b] font-light">
              Cada prenda es una inversión en tu identidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
                title: "Atemporal",
                desc: "Piezas que trascienden tendencias y se convierten en esenciales de tu armario"
              },
              {
                img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
                title: "Consciente",
                desc: "Priorizamos calidad, sostenibilidad y diseño único en cada selección"
              },
              {
                img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80",
                title: "Personal",
                desc: "Descubre tu propio estilo en un espacio de inspiración único"
              }
            ].map((feature, idx) => (
              <div key={idx} className="group">
                <div className="relative h-[400px] mb-6 overflow-hidden bg-[#f5f0e8]">
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-[32px] font-light text-[#2d2d2d] mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-[#6b6b6b] leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-[#9caf88]">
        <div className="max-w-[1200px] mx-auto px-12">
          <div className="text-center mb-16">
            <div className="text-5xl font-light tracking-[0.2em] text-white mb-4">
              ★★★★★ 4.7
            </div>
            <p className="text-xl text-[#f5f0e8] font-light">
              130 reseñas en Google
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                quote: "Una tienda preciosa con prendas de calidad. El trato es excelente y siempre encuentro algo especial.",
                author: "María G."
              },
              {
                quote: "Me encanta la selección de ropa. Todo es muy bonito y la atención al cliente es inmejorable.",
                author: "Laura M."
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-[#f5f0e8] p-10 space-y-5">
                <p className="text-lg leading-relaxed text-[#2d2d2d] italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-base font-medium text-[#7a9370]">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <h2 className="text-[56px] font-light tracking-wide text-[#2d2d2d]">
                Visítanos
              </h2>

              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="text-sm font-semibold tracking-[0.15em] text-[#9caf88] uppercase">
                    Dirección
                  </div>
                  <p className="text-xl text-[#2d2d2d] leading-relaxed font-light">
                    C/ del Rosselló, 228<br />
                    Eixample, Barcelona
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-semibold tracking-[0.15em] text-[#9caf88] uppercase">
                    Teléfono
                  </div>
                  <a
                    href="tel:931259586"
                    className="text-xl text-[#2d2d2d] hover:text-[#7a9370] transition-colors font-light block"
                  >
                    931 25 95 86
                  </a>
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-semibold tracking-[0.15em] text-[#9caf88] uppercase">
                    Horarios
                  </div>
                  <p className="text-xl text-[#2d2d2d] leading-relaxed font-light">
                    Lunes a Viernes: 10:00 - 20:30<br />
                    Sábados: 10:00 - 21:00<br />
                    Domingos: Cerrado
                  </p>
                </div>

                <div className="pt-6">
                  <a
                    href="https://instagram.com/clover.bcn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 text-[#9caf88] hover:text-[#7a9370] transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-lg font-medium tracking-wide">@clover.bcn</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative h-[600px] bg-[#f5f0e8]">
              <Image
                src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1000&q=80"
                alt="Barcelona Eixample"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d2d2d] py-20">
        <div className="max-w-[1200px] mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-12">
            <div className="space-y-5">
              <div className="text-[36px] font-light tracking-[0.2em] text-white">
                CLOVER
              </div>
              <p className="text-lg text-[#9caf88] font-light">
                Moda consciente y atemporal en Barcelona
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-sm font-semibold tracking-[0.15em] text-[#9caf88] uppercase mb-4">
                Tienda
              </div>
              <a href="#" className="block text-base text-white hover:text-[#9caf88] transition-colors font-light">
                Nueva Colección
              </a>
              <a href="#" className="block text-base text-white hover:text-[#9caf88] transition-colors font-light">
                Catálogo
              </a>
            </div>

            <div className="space-y-4">
              <div className="text-sm font-semibold tracking-[0.15em] text-[#9caf88] uppercase mb-4">
                Contacto
              </div>
              <a
                href="https://instagram.com/clover.bcn"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base text-white hover:text-[#9caf88] transition-colors font-light"
              >
                @clover.bcn
              </a>
              <a
                href="tel:931259586"
                className="block text-base text-white hover:text-[#9caf88] transition-colors font-light"
              >
                931 25 95 86
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-[#4a4a4a]">
            <p className="text-sm text-[#6b6b6b] font-light">
              © 2026 CLOVER Barcelona. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
