import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#f5f0e8]">
        <div className="max-w-[1440px] mx-auto px-[100px] py-20 flex items-center gap-16">
          <div className="flex-1 flex flex-col gap-6 max-w-[550px]">
            <h1 className="text-[72px] font-light tracking-[0.11em] text-[#2d2d2d]">
              CLOVER
            </h1>
            <h2 className="text-[42px] font-light leading-[1.2] text-[#7a9370]">
              Descubre tu estilo atemporal
            </h2>
            <p className="text-lg leading-[1.6] text-[#6b6b6b]">
              Moda consciente y única en el corazón del Eixample. Cada pieza cuenta una historia.
            </p>
            <div className="flex gap-4 mt-4">
              <button className="px-9 py-[18px] bg-[#9caf88] text-white text-base font-medium tracking-wider hover:bg-[#7a9370] transition-colors">
                Visitar tienda
              </button>
              <button className="px-9 py-[18px] border border-[#9caf88] text-[#9caf88] text-base font-medium tracking-wider hover:bg-[#9caf88] hover:text-white transition-colors">
                Ver colección
              </button>
            </div>
          </div>
          <div className="relative w-[500px] h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&q=80"
              alt="Elegant fashion boutique interior"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-[120px] py-[100px]">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light tracking-[0.04em] text-[#2d2d2d] mb-4">
              Nuestra filosofía
            </h2>
            <p className="text-xl text-[#6b6b6b]">
              Cada prenda es una inversión en tu identidad
            </p>
          </div>

          <div className="grid grid-cols-3 gap-10">
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
              <div key={idx} className="flex flex-col gap-5">
                <div className="relative h-80 bg-[#f5f0e8]">
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[28px] font-light text-[#2d2d2d]">
                  {feature.title}
                </h3>
                <p className="text-base leading-[1.5] text-[#6b6b6b]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-[#9caf88]">
        <div className="max-w-[1440px] mx-auto px-[120px] py-[100px]">
          <div className="text-center mb-12">
            <div className="text-4xl font-light tracking-[0.11em] text-white mb-3">
              ★★★★★ 4.7
            </div>
            <p className="text-lg text-[#f5f0e8]">
              130 reseñas en Google
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
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
              <div key={idx} className="bg-[#f5f0e8] p-8 flex flex-col gap-4">
                <p className="text-base leading-[1.6] text-[#2d2d2d]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-sm font-medium text-[#7a9370]">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-[120px] py-[100px] flex gap-20">
          <div className="flex-1 flex flex-col gap-10">
            <h2 className="text-5xl font-light tracking-[0.04em] text-[#2d2d2d]">
              Visítanos
            </h2>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-semibold tracking-[0.14em] text-[#9caf88] uppercase">
                  Dirección
                </div>
                <p className="text-lg leading-[1.6] text-[#2d2d2d]">
                  C/ del Rosselló, 228<br />
                  Eixample, Barcelona
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="text-sm font-semibold tracking-[0.14em] text-[#9caf88] uppercase">
                  Teléfono
                </div>
                <a href="tel:931259586" className="text-lg text-[#2d2d2d] hover:text-[#7a9370] transition-colors">
                  931 25 95 86
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <div className="text-sm font-semibold tracking-[0.14em] text-[#9caf88] uppercase">
                  Horarios
                </div>
                <p className="text-lg leading-[1.6] text-[#2d2d2d]">
                  Lunes a Viernes: 10:00 - 20:30<br />
                  Sábados: 10:00 - 21:00<br />
                  Domingos: Cerrado
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-[500px] h-[500px] bg-[#f5f0e8]">
            <Image
              src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1000&q=80"
              alt="Barcelona Eixample neighborhood"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d2d2d]">
        <div className="max-w-[1440px] mx-auto px-[120px] py-16">
          <div className="flex gap-20 mb-10">
            <div className="flex-1 flex flex-col gap-4">
              <div className="text-[32px] font-light tracking-[0.19em] text-white">
                CLOVER
              </div>
              <p className="text-base text-[#9caf88]">
                Moda consciente y atemporal
              </p>
            </div>

            <div className="flex gap-16">
              <div className="flex flex-col gap-3">
                <div className="text-sm font-semibold tracking-[0.14em] text-[#9caf88] uppercase">
                  Tienda
                </div>
                <a href="#" className="text-sm text-white hover:text-[#9caf88] transition-colors">
                  Nueva Colección
                </a>
                <a href="#" className="text-sm text-white hover:text-[#9caf88] transition-colors">
                  Catálogo
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-sm font-semibold tracking-[0.14em] text-[#9caf88] uppercase">
                  Contacto
                </div>
                <a
                  href="https://instagram.com/clover.bcn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:text-[#9caf88] transition-colors"
                >
                  @clover.bcn
                </a>
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-[#6b6b6b]">
            <p className="text-sm text-[#6b6b6b]">
              © 2026 CLOVER Barcelona. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
