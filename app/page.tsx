import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md z-50 border-b border-[#D4C4B0]/30 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-7">
          <div className="flex items-center justify-between">
            <div className="text-[32px] font-extralight tracking-[0.25em] text-[#2d2d2d] cursor-pointer hover:text-[#9B7E6B] transition-colors">
              CLOVER
            </div>
            <div className="hidden md:flex items-center gap-14">
              <a href="#filosofia" className="text-[13px] font-medium tracking-[0.15em] text-[#6b6b6b] hover:text-[#9B7E6B] transition-all duration-300 uppercase">Filosofía</a>
              <a href="#testimonios" className="text-[13px] font-medium tracking-[0.15em] text-[#6b6b6b] hover:text-[#9B7E6B] transition-all duration-300 uppercase">Reseñas</a>
              <a href="#visita" className="text-[13px] font-medium tracking-[0.15em] text-[#6b6b6b] hover:text-[#9B7E6B] transition-all duration-300 uppercase">Visita</a>
              <a
                href="https://instagram.com/clover.bcn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9B7E6B] hover:text-[#6B5744] transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#F5F0E8] via-[#FAF7F2] to-[#F0EBE3] flex items-center pt-24">
        <div className="max-w-[1500px] mx-auto px-8 md:px-16 py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
            <div className="space-y-12 max-w-2xl">
              <div className="space-y-8">
                <div className="inline-block px-6 py-2 bg-[#9B7E6B]/10 border border-[#9B7E6B]/20 rounded-full">
                  <span className="text-[11px] font-semibold tracking-[0.25em] text-[#9B7E6B] uppercase">Barcelona · Eixample</span>
                </div>
                <h1 className="text-[clamp(70px,8vw,110px)] leading-[0.85] font-extralight tracking-[0.12em] text-[#2d2d2d] mb-10">
                  CLOVER
                </h1>
                <h2 className="text-[clamp(38px,5vw,58px)] leading-[1.1] font-light text-[#9B7E6B]">
                  Descubre tu estilo atemporal
                </h2>
              </div>
              <p className="text-[22px] text-[#5a5a5a] leading-[1.7] font-light max-w-xl">
                Moda consciente y única en el corazón del Eixample. Cada pieza cuenta una historia de elegancia y autenticidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 pt-8">
                <a
                  href="https://instagram.com/clover.bcn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-block text-center px-14 py-6 bg-[#9B7E6B] text-white text-[13px] font-semibold tracking-[0.2em] hover:bg-[#6B5744] transition-all duration-400 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 uppercase"
                >
                  Ver Instagram
                </a>
                <a
                  href="tel:931259586"
                  className="inline-block text-center px-14 py-6 border-2 border-[#9B7E6B] text-[#9B7E6B] text-[13px] font-semibold tracking-[0.2em] hover:bg-[#9B7E6B] hover:text-white transition-all duration-400 hover:shadow-lg uppercase"
                >
                  Llamar Ahora
                </a>
              </div>
              <div className="flex items-center gap-10 pt-10 flex-wrap">
                <div className="flex items-center gap-4">
                  <div className="w-[3px] h-16 bg-gradient-to-b from-[#9B7E6B] to-[#D4C4B0]"></div>
                  <div>
                    <div className="text-[32px] font-light text-[#2d2d2d] mb-1">★ 4.7</div>
                    <div className="text-[13px] text-[#6b6b6b] font-medium tracking-wide">130 reseñas Google</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-[3px] h-16 bg-gradient-to-b from-[#9B7E6B] to-[#D4C4B0]"></div>
                  <div>
                    <div className="text-[32px] font-light text-[#2d2d2d] mb-1">10+</div>
                    <div className="text-[13px] text-[#6b6b6b] font-medium tracking-wide">Años en Barcelona</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[750px] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9B7E6B]/20 to-[#6B5744]/20 rounded-2xl transform rotate-3"></div>
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-700">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
                  alt="CLOVER Boutique Barcelona"
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
      <section id="filosofia" className="py-48 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9B7E6B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4C4B0]/30 rounded-full blur-3xl"></div>
        <div className="max-w-[1500px] mx-auto px-8 md:px-16 relative z-10">
          <div className="text-center mb-32">
            <div className="inline-block px-6 py-2 bg-[#9B7E6B]/10 border border-[#9B7E6B]/20 rounded-full mb-8">
              <span className="text-[11px] font-semibold tracking-[0.3em] text-[#9B7E6B] uppercase">Nuestra Filosofía</span>
            </div>
            <h2 className="text-[clamp(48px,6vw,72px)] font-light tracking-wide text-[#2d2d2d] mb-10 leading-tight">
              Moda consciente<br/>y atemporal
            </h2>
            <p className="text-[24px] text-[#5a5a5a] font-light max-w-4xl mx-auto leading-[1.7]">
              En CLOVER creemos en la moda que trasciende tendencias,<br className="hidden md:block"/>priorizando calidad, diseño único y sostenibilidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
                icon: "✦",
                title: "Atemporal",
                desc: "Seleccionamos piezas que trascienden modas pasajeras y se convierten en tesoros duraderos de tu armario"
              },
              {
                img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
                icon: "◈",
                title: "Consciente",
                desc: "Priorizamos calidad excepcional, sostenibilidad real y diseño ético en cada una de nuestras selecciones"
              },
              {
                img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80",
                icon: "❋",
                title: "Personal",
                desc: "Ofrecemos asesoramiento personalizado en un ambiente acogedor donde descubrir tu estilo único"
              }
            ].map((feature, idx) => (
              <div key={idx} className="group text-center hover:-translate-y-2 transition-all duration-500">
                <div className="relative h-[480px] mb-10 overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-[48px] text-[#9B7E6B] mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-[40px] font-light text-[#2d2d2d] mb-6 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-[18px] text-[#5a5a5a] leading-[1.7] font-light px-4">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-48 bg-gradient-to-b from-[#FAF7F2] to-[#F5F0E8]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative h-[700px] order-2 lg:order-1 rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&q=80"
                alt="Interior CLOVER Barcelona"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="space-y-10 order-1 lg:order-2">
              <div className="inline-block px-6 py-2 bg-[#9B7E6B]/10 border border-[#9B7E6B]/20 rounded-full">
                <span className="text-[11px] font-semibold tracking-[0.3em] text-[#9B7E6B] uppercase">Experiencia Única</span>
              </div>
              <h2 className="text-[clamp(44px,5vw,64px)] font-light tracking-wide text-[#2d2d2d] leading-tight">
                Un espacio de inspiración<br/>en el Eixample
              </h2>
              <div className="space-y-7 text-[20px] text-[#5a5a5a] leading-[1.8] font-light">
                <p>
                  CLOVER es más que una boutique. Es un espacio donde el estilo personal florece a través de una cuidada selección de prendas que combinan diseño contemporáneo con valores de sostenibilidad.
                </p>
                <p>
                  Ubicados en el corazón del Eixample de Barcelona, ofrecemos una experiencia de compra personalizada donde cada visita es un descubrimiento de piezas únicas.
                </p>
              </div>
              <div className="pt-8">
                <a
                  href="#visita"
                  className="inline-block px-14 py-6 bg-[#9B7E6B] text-white text-[13px] font-semibold tracking-[0.2em] hover:bg-[#6B5744] transition-all duration-400 shadow-lg hover:shadow-2xl uppercase"
                >
                  Cómo Llegar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-48 bg-gradient-to-br from-[#9B7E6B] via-[#A0826D] to-[#6B5744] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTZjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        </div>
        <div className="max-w-[1500px] mx-auto px-8 md:px-16 relative z-10">
          <div className="text-center mb-28">
            <div className="text-[72px] font-light tracking-[0.4em] text-white mb-8 drop-shadow-lg">
              ★★★★★
            </div>
            <div className="text-[64px] font-light text-white mb-6 drop-shadow-lg">4.7</div>
            <p className="text-[22px] text-white/90 font-light tracking-wide">
              Basado en 130 reseñas verificadas en Google
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
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
              <div key={idx} className="bg-white/95 backdrop-blur-sm p-14 rounded-2xl space-y-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-white/20">
                <div className="text-[28px] text-[#9B7E6B]">★★★★★</div>
                <p className="text-[20px] leading-[1.8] text-[#2d2d2d] font-light italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-[16px] font-semibold text-[#9B7E6B] tracking-wide">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <a
              href="https://www.google.com/maps/search/?api=1&query=CLOVER+Barcelona+Rossello+228"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-14 py-6 border-2 border-white text-white text-[13px] font-semibold tracking-[0.2em] hover:bg-white hover:text-[#9B7E6B] transition-all duration-400 rounded-full uppercase backdrop-blur-sm"
            >
              Leer Más Reseñas
            </a>
          </div>
        </div>
      </section>

      {/* Instagram Section - Connect Your Real Feed */}
      <section className="py-48 bg-white">
        <div className="max-w-[1500px] mx-auto px-8 md:px-16">
          <div className="text-center mb-28">
            <div className="inline-block px-6 py-2 bg-[#9B7E6B]/10 border border-[#9B7E6B]/20 rounded-full mb-8">
              <span className="text-[11px] font-semibold tracking-[0.3em] text-[#9B7E6B] uppercase">Síguenos</span>
            </div>
            <h2 className="text-[clamp(48px,6vw,72px)] font-light tracking-wide text-[#2d2d2d] mb-10">
              @clover.bcn
            </h2>
            <p className="text-[22px] text-[#5a5a5a] font-light max-w-3xl mx-auto leading-relaxed">
              Descubre inspiración diaria en nuestro Instagram.<br/>
              Estilo, nuevas piezas y mucho más.
            </p>
          </div>

          {/* Note: Replace these placeholder images with actual Instagram feed images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80",
              "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
              "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
              "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80",
              "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80",
              "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&q=80",
              "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
              "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80"
            ].map((img, idx) => (
              <div key={idx} className="relative h-[280px] md:h-[350px] overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <Image
                  src={img}
                  alt={`Instagram post ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#9B7E6B]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <a
              href="https://instagram.com/clover.bcn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-14 py-6 bg-gradient-to-r from-[#9B7E6B] to-[#6B5744] text-white text-[13px] font-semibold tracking-[0.2em] hover:shadow-2xl transition-all duration-400 rounded-full uppercase group"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
              </svg>
              Seguir en Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-36 bg-gradient-to-br from-[#2d2d2d] via-[#3a3a3a] to-[#2d2d2d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#9B7E6B] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4C4B0] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-[900px] mx-auto px-8 md:px-16 text-center relative z-10">
          <div className="inline-block px-6 py-2 bg-[#9B7E6B]/20 border border-[#9B7E6B]/30 rounded-full mb-10">
            <span className="text-[11px] font-semibold tracking-[0.3em] text-[#D4C4B0] uppercase">Mantente Informado</span>
          </div>
          <h2 className="text-[clamp(40px,5vw,60px)] font-light tracking-wide text-white mb-8 leading-tight">
            Únete a nuestra comunidad
          </h2>
          <p className="text-[20px] text-[#D4C4B0] font-light mb-14 leading-relaxed">
            Recibe en exclusiva noticias sobre nuevas colecciones,<br className="hidden sm:block"/>eventos especiales y ofertas únicas
          </p>
          <form className="flex flex-col sm:flex-row gap-5 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-8 py-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#9B7E6B] focus:bg-white/15 transition-all rounded-full text-[15px]"
            />
            <button type="submit" className="px-14 py-6 bg-[#9B7E6B] text-white text-[13px] font-semibold tracking-[0.2em] hover:bg-[#A0826D] transition-all duration-400 rounded-full shadow-lg hover:shadow-2xl uppercase">
              Suscribirse
            </button>
          </form>
          <p className="text-[13px] text-white/30 mt-8 font-light">
            Al suscribirte, aceptas recibir emails de CLOVER. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </section>

      {/* Visit Section */}
      <section id="visita" className="py-48 bg-gradient-to-b from-white to-[#FAF7F2]">
        <div className="max-w-[1500px] mx-auto px-8 md:px-16">
          <div className="text-center mb-32">
            <div className="inline-block px-6 py-2 bg-[#9B7E6B]/10 border border-[#9B7E6B]/20 rounded-full mb-8">
              <span className="text-[11px] font-semibold tracking-[0.3em] text-[#9B7E6B] uppercase">Ubicación</span>
            </div>
            <h2 className="text-[clamp(48px,6vw,72px)] font-light tracking-wide text-[#2d2d2d] mb-10">
              Visítanos
            </h2>
            <p className="text-[22px] text-[#5a5a5a] font-light max-w-3xl mx-auto leading-relaxed">
              Te esperamos en el corazón del Eixample para ofrecerte<br className="hidden md:block"/>una experiencia de moda única y personalizada
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-24 items-start">
            <div className="space-y-16">
              <div className="space-y-5 group hover:translate-x-2 transition-transform duration-300">
                <div className="text-[11px] font-bold tracking-[0.3em] text-[#9B7E6B] uppercase flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-[#9B7E6B]"></div>
                  Dirección
                </div>
                <p className="text-[26px] text-[#2d2d2d] leading-relaxed font-light">
                  C/ del Rosselló, 228<br />
                  08008 Eixample, Barcelona
                </p>
              </div>

              <div className="space-y-5 group hover:translate-x-2 transition-transform duration-300">
                <div className="text-[11px] font-bold tracking-[0.3em] text-[#9B7E6B] uppercase flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-[#9B7E6B]"></div>
                  Teléfono
                </div>
                <a
                  href="tel:931259586"
                  className="text-[26px] text-[#2d2d2d] hover:text-[#9B7E6B] transition-colors font-light block"
                >
                  931 25 95 86
                </a>
              </div>

              <div className="space-y-5 group hover:translate-x-2 transition-transform duration-300">
                <div className="text-[11px] font-bold tracking-[0.3em] text-[#9B7E6B] uppercase flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-[#9B7E6B]"></div>
                  Horarios
                </div>
                <div className="text-[19px] text-[#2d2d2d] space-y-3 font-light">
                  <div className="flex justify-between max-w-md p-4 rounded-lg hover:bg-[#FAF7F2] transition-colors">
                    <span className="font-medium">Lunes a Viernes</span>
                    <span className="text-[#9B7E6B]">10:00 - 20:30</span>
                  </div>
                  <div className="flex justify-between max-w-md p-4 rounded-lg hover:bg-[#FAF7F2] transition-colors">
                    <span className="font-medium">Sábados</span>
                    <span className="text-[#9B7E6B]">10:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between max-w-md p-4 rounded-lg hover:bg-[#FAF7F2] transition-colors">
                    <span className="font-medium">Domingos</span>
                    <span className="text-[#6b6b6b]">Cerrado</span>
                  </div>
                </div>
              </div>

              <div className="space-y-5 group hover:translate-x-2 transition-transform duration-300">
                <div className="text-[11px] font-bold tracking-[0.3em] text-[#9B7E6B] uppercase flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-[#9B7E6B]"></div>
                  Cómo llegar
                </div>
                <div className="text-[19px] text-[#5a5a5a] space-y-3 font-light">
                  <p className="flex items-center gap-3">
                    <span className="text-[24px]">🚇</span> Metro: Diagonal (L3, L5)
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-[24px]">🚌</span> Bus: 7, 22, 24, 28
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="https://instagram.com/clover.bcn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 text-[#9B7E6B] hover:text-[#6B5744] transition-colors text-[19px] font-medium group"
                >
                  <svg className="w-7 h-7 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="tracking-wide">@clover.bcn</span>
                </a>
              </div>
            </div>

            <div className="relative h-[750px] bg-[#F5F0E8] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=1000&q=80"
                alt="Barcelona Eixample"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=C%2F+del+Rossell%C3%B3%2C+228%2C+Barcelona"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-16 py-7 bg-gradient-to-r from-[#9B7E6B] to-[#6B5744] text-white text-[13px] font-semibold tracking-[0.2em] hover:shadow-2xl transition-all duration-400 rounded-full uppercase group"
            >
              <span className="group-hover:tracking-[0.25em] transition-all duration-300">Abrir en Google Maps</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#9B7E6B] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#D4C4B0] rounded-full blur-3xl"></div>
        </div>

        {/* Decorative line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#9B7E6B]/30 to-transparent"></div>

        <div className="max-w-[1500px] mx-auto px-8 md:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.9fr_0.9fr] gap-24 mb-24">
            {/* Brand Section */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="text-[56px] font-extralight tracking-[0.3em] text-white leading-none">
                  CLOVER
                </div>
                <div className="w-16 h-[2px] bg-gradient-to-r from-[#9B7E6B] to-transparent"></div>
              </div>
              <p className="text-[18px] text-[#D4C4B0]/80 font-light leading-[1.8] max-w-md">
                Moda consciente y atemporal en el corazón de Barcelona. Cada pieza cuenta una historia de elegancia y autenticidad.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://instagram.com/clover.bcn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 rounded-full bg-[#9B7E6B]/10 border border-[#9B7E6B]/20 flex items-center justify-center text-[#D4C4B0] hover:bg-[#9B7E6B] hover:border-[#9B7E6B] hover:text-white transition-all duration-400 hover:scale-110 hover:shadow-lg hover:shadow-[#9B7E6B]/20"
                >
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Visita Section */}
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-3">
                  <div className="w-10 h-[1px] bg-[#9B7E6B]"></div>
                  <h3 className="text-[12px] font-bold tracking-[0.3em] text-[#9B7E6B] uppercase">Visita</h3>
                </div>
              </div>
              <nav className="space-y-5">
                <a
                  href="#visita"
                  className="group flex items-center gap-3 text-[17px] text-white/50 hover:text-[#D4C4B0] transition-all duration-300 font-light"
                >
                  <span className="w-0 h-[1px] bg-[#9B7E6B] group-hover:w-4 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Ubicación</span>
                </a>
                <a
                  href="#visita"
                  className="group flex items-center gap-3 text-[17px] text-white/50 hover:text-[#D4C4B0] transition-all duration-300 font-light"
                >
                  <span className="w-0 h-[1px] bg-[#9B7E6B] group-hover:w-4 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Horarios</span>
                </a>
                <a
                  href="https://instagram.com/clover.bcn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[17px] text-white/50 hover:text-[#D4C4B0] transition-all duration-300 font-light"
                >
                  <span className="w-0 h-[1px] bg-[#9B7E6B] group-hover:w-4 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Instagram</span>
                </a>
              </nav>
            </div>

            {/* Contacto Section */}
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-3">
                  <div className="w-10 h-[1px] bg-[#9B7E6B]"></div>
                  <h3 className="text-[12px] font-bold tracking-[0.3em] text-[#9B7E6B] uppercase">Contacto</h3>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-[17px] text-white/50 font-light leading-[1.7]">
                    C/ del Rosselló, 228
                  </p>
                  <p className="text-[17px] text-white/50 font-light leading-[1.7]">
                    08008 Barcelona
                  </p>
                </div>
                <a
                  href="tel:931259586"
                  className="group inline-flex items-center gap-3 text-[17px] text-white/50 hover:text-[#D4C4B0] transition-all duration-300 font-light"
                >
                  <span className="w-0 h-[1px] bg-[#9B7E6B] group-hover:w-4 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">931 25 95 86</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-16 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[13px] text-white/25 font-light tracking-wide">
                © 2026 CLOVER Barcelona. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-[13px] text-white/25 hover:text-[#D4C4B0] transition-colors font-light">
                  Política de Privacidad
                </a>
                <span className="text-white/10">•</span>
                <a href="#" className="text-[13px] text-white/25 hover:text-[#D4C4B0] transition-colors font-light">
                  Términos y Condiciones
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
