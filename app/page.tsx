import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-[#f5f0e8]">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="text-[28px] font-extralight tracking-[0.2em] text-[#2d2d2d]">
              CLOVER
            </div>
            <div className="hidden md:flex items-center gap-12">
              <a href="#coleccion" className="text-sm tracking-wider text-[#6b6b6b] hover:text-[#9caf88] transition-colors">COLECCIÓN</a>
              <a href="#filosofia" className="text-sm tracking-wider text-[#6b6b6b] hover:text-[#9caf88] transition-colors">FILOSOFÍA</a>
              <a href="#about" className="text-sm tracking-wider text-[#6b6b6b] hover:text-[#9caf88] transition-colors">SOBRE NOSOTROS</a>
              <a href="#visita" className="text-sm tracking-wider text-[#6b6b6b] hover:text-[#9caf88] transition-colors">VISITA</a>
              <a
                href="https://instagram.com/clover.bcn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9caf88] hover:text-[#7a9370] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#f5f0e8] flex items-center pt-20">
        <div className="max-w-[1400px] mx-auto px-12 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 max-w-xl">
              <div className="space-y-2">
                <div className="text-sm tracking-[0.3em] text-[#9caf88] font-medium mb-6">PRIMAVERA / VERANO 2026</div>
                <h1 className="text-[90px] font-extralight tracking-[0.15em] text-[#2d2d2d] leading-[0.9] mb-8">
                  CLOVER
                </h1>
                <h2 className="text-[52px] font-light text-[#7a9370] leading-[1.1]">
                  Descubre tu estilo atemporal
                </h2>
              </div>
              <p className="text-xl text-[#6b6b6b] leading-relaxed font-light max-w-md">
                Moda consciente y única en el corazón del Eixample. Cada pieza cuenta una historia de elegancia y sostenibilidad.
              </p>
              <div className="flex gap-4 pt-6">
                <button className="px-12 py-5 bg-[#9caf88] text-white text-sm font-medium tracking-[0.2em] hover:bg-[#7a9370] transition-all duration-300 shadow-sm">
                  EXPLORAR COLECCIÓN
                </button>
                <button className="px-12 py-5 border-2 border-[#9caf88] text-[#9caf88] text-sm font-medium tracking-[0.2em] hover:bg-[#9caf88] hover:text-white transition-all duration-300">
                  RESERVAR CITA
                </button>
              </div>
              <div className="flex items-center gap-8 pt-8">
                <div className="border-l-2 border-[#9caf88] pl-6">
                  <div className="text-3xl font-light text-[#2d2d2d]">★ 4.7</div>
                  <div className="text-sm text-[#6b6b6b] font-light">130+ reseñas</div>
                </div>
                <div className="border-l-2 border-[#9caf88] pl-6">
                  <div className="text-3xl font-light text-[#2d2d2d]">10+</div>
                  <div className="text-sm text-[#6b6b6b] font-light">Años de experiencia</div>
                </div>
              </div>
            </div>
            <div className="relative h-[750px] w-full">
              <div className="relative w-full h-full overflow-hidden shadow-2xl">
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

      {/* Featured Collection */}
      <section id="coleccion" className="py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-12">
          <div className="text-center mb-24">
            <div className="text-sm tracking-[0.3em] text-[#9caf88] font-medium mb-4">DESTACADOS</div>
            <h2 className="text-[64px] font-light tracking-wide text-[#2d2d2d] mb-6">
              Nueva Colección
            </h2>
            <p className="text-xl text-[#6b6b6b] font-light max-w-2xl mx-auto">
              Piezas seleccionadas con cuidado que definen la elegancia contemporánea
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80",
                category: "Chaquetas",
                name: "Blazer Oversized",
                price: "189€"
              },
              {
                img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80",
                category: "Vestidos",
                name: "Vestido Lino Natural",
                price: "145€"
              },
              {
                img: "https://images.unsplash.com/photo-1562137369-1a1a0bc66744?w=600&q=80",
                category: "Pantalones",
                name: "Pantalón Wide Leg",
                price: "125€"
              },
              {
                img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80",
                category: "Accesorios",
                name: "Bolso Tote Cuero",
                price: "210€"
              }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-[500px] mb-6 overflow-hidden bg-[#f5f0e8]">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-xs tracking-[0.2em] text-[#9caf88] font-medium">{item.category.toUpperCase()}</div>
                  <h3 className="text-xl font-light text-[#2d2d2d]">{item.name}</h3>
                  <p className="text-lg text-[#6b6b6b] font-light">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="px-16 py-5 border-2 border-[#2d2d2d] text-[#2d2d2d] text-sm font-medium tracking-[0.2em] hover:bg-[#2d2d2d] hover:text-white transition-all duration-300">
              VER TODA LA COLECCIÓN
            </button>
          </div>
        </div>
      </section>

      {/* Lookbook / Gallery */}
      <section className="py-40 bg-[#f5f0e8]">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="text-center mb-24">
            <div className="text-sm tracking-[0.3em] text-[#9caf88] font-medium mb-4">INSPIRACIÓN</div>
            <h2 className="text-[64px] font-light tracking-wide text-[#2d2d2d] mb-6">
              Lookbook
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80", span: "row-span-2" },
              { img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80", span: "" },
              { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80", span: "" },
              { img: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80", span: "" },
              { img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80", span: "row-span-2" },
              { img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80", span: "" }
            ].map((item, idx) => (
              <div key={idx} className={`relative h-[400px] overflow-hidden group ${item.span}`}>
                <Image
                  src={item.img}
                  alt={`Lookbook ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="filosofia" className="py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-12">
          <div className="text-center mb-24">
            <div className="text-sm tracking-[0.3em] text-[#9caf88] font-medium mb-4">NUESTROS VALORES</div>
            <h2 className="text-[64px] font-light tracking-wide text-[#2d2d2d] mb-6">
              Nuestra filosofía
            </h2>
            <p className="text-2xl text-[#6b6b6b] font-light max-w-3xl mx-auto leading-relaxed">
              Cada prenda es una inversión en tu identidad. Creamos experiencias de moda que trascienden el tiempo y las tendencias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
                icon: "✦",
                title: "Atemporal",
                desc: "Seleccionamos piezas que trascienden tendencias pasajeras y se convierten en esenciales duraderos de tu armario."
              },
              {
                img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
                icon: "◈",
                title: "Consciente",
                desc: "Priorizamos calidad, sostenibilidad y diseño ético en cada selección. Moda responsable sin comprometer el estilo."
              },
              {
                img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80",
                icon: "❋",
                title: "Personal",
                desc: "Ofrecemos asesoramiento personalizado en un espacio único donde descubrir tu propio estilo con confianza."
              }
            ].map((feature, idx) => (
              <div key={idx} className="group text-center">
                <div className="relative h-[450px] mb-8 overflow-hidden">
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="text-4xl text-[#9caf88] mb-4">{feature.icon}</div>
                <h3 className="text-[36px] font-light text-[#2d2d2d] mb-5">
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

      {/* About Story */}
      <section id="about" className="py-40 bg-[#f5f0e8]">
        <div className="max-w-[1200px] mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&q=80"
                alt="CLOVER Store"
                fill
                className="object-cover shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              <div className="text-sm tracking-[0.3em] text-[#9caf88] font-medium">NUESTRA HISTORIA</div>
              <h2 className="text-[56px] font-light tracking-wide text-[#2d2d2d] leading-tight">
                Más de una década definiendo el estilo del Eixample
              </h2>
              <div className="space-y-6 text-lg text-[#6b6b6b] leading-relaxed font-light">
                <p>
                  Desde 2015, CLOVER ha sido el destino de referencia para quienes buscan moda con significado en Barcelona. Ubicados en el corazón del Eixample, hemos cultivado una comunidad de personas que valoran la calidad, el diseño atemporal y la sostenibilidad.
                </p>
                <p>
                  Cada pieza en nuestra boutique es seleccionada personalmente, asegurando que cada visita sea una experiencia única de descubrimiento. Trabajamos con diseñadores emergentes y establecidos que comparten nuestros valores de craftsmanship y responsabilidad.
                </p>
                <p>
                  Más que una tienda, CLOVER es un espacio de inspiración donde el estilo personal florece.
                </p>
              </div>
              <div className="pt-6">
                <button className="px-12 py-5 bg-[#9caf88] text-white text-sm font-medium tracking-[0.2em] hover:bg-[#7a9370] transition-all duration-300">
                  CONOCE MÁS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-40 bg-[#9caf88]">
        <div className="max-w-[1400px] mx-auto px-12">
          <div className="text-center mb-20">
            <div className="text-6xl font-light tracking-[0.3em] text-white mb-6">
              ★★★★★
            </div>
            <div className="text-[48px] font-light text-white mb-4">4.7</div>
            <p className="text-xl text-[#f5f0e8] font-light">
              Basado en 130+ reseñas verificadas en Google
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                quote: "Una tienda preciosa con prendas de calidad excepcional. El trato es excelente y siempre encuentro algo especial que no veo en ningún otro sitio.",
                author: "María García",
                rating: 5
              },
              {
                quote: "Me encanta la selección de ropa. Todo es muy bonito y la atención personalizada es inmejorable. Las chicas te ayudan a encontrar exactamente lo que buscas.",
                author: "Laura Martínez",
                rating: 5
              },
              {
                quote: "Calidad, estilo y sostenibilidad. CLOVER tiene todo lo que busco en una boutique. Las piezas son atemporales y duran años.",
                author: "Sofia Rodríguez",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-[#f5f0e8] p-12 space-y-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-2xl text-[#9caf88]">
                  {"★".repeat(testimonial.rating)}
                </div>
                <p className="text-lg leading-relaxed text-[#2d2d2d] font-light italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-base font-medium text-[#7a9370]">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 border-2 border-white text-white text-sm font-medium tracking-[0.2em] hover:bg-white hover:text-[#9caf88] transition-all duration-300"
            >
              LEER MÁS RESEÑAS
            </a>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-12">
          <div className="text-center mb-20">
            <div className="text-sm tracking-[0.3em] text-[#9caf88] font-medium mb-4">SÍGUENOS</div>
            <h2 className="text-[64px] font-light tracking-wide text-[#2d2d2d] mb-6">
              @clover.bcn
            </h2>
            <p className="text-xl text-[#6b6b6b] font-light">
              Únete a nuestra comunidad y descubre inspiración diaria
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
              <div key={idx} className="relative h-[300px] overflow-hidden group cursor-pointer">
                <Image
                  src={img}
                  alt={`Instagram ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="https://instagram.com/clover.bcn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 bg-[#2d2d2d] text-white text-sm font-medium tracking-[0.2em] hover:bg-[#9caf88] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              SEGUIR EN INSTAGRAM
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-[#2d2d2d]">
        <div className="max-w-[800px] mx-auto px-12 text-center">
          <div className="text-sm tracking-[0.3em] text-[#9caf88] font-medium mb-6">NEWSLETTER</div>
          <h2 className="text-[52px] font-light tracking-wide text-white mb-6">
            Únete a nuestra comunidad
          </h2>
          <p className="text-lg text-[#9caf88] font-light mb-12">
            Recibe en exclusiva noticias sobre nuevas colecciones, eventos y ofertas especiales
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-6 py-5 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#9caf88] transition-colors"
            />
            <button className="px-12 py-5 bg-[#9caf88] text-white text-sm font-medium tracking-[0.2em] hover:bg-[#7a9370] transition-colors duration-300">
              SUSCRIBIRSE
            </button>
          </form>
          <p className="text-xs text-white/40 mt-6">
            Al suscribirte, aceptas recibir emails de CLOVER. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </section>

      {/* Visit Section */}
      <section id="visita" className="py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-12">
          <div className="text-center mb-20">
            <div className="text-sm tracking-[0.3em] text-[#9caf88] font-medium mb-4">UBICACIÓN</div>
            <h2 className="text-[64px] font-light tracking-wide text-[#2d2d2d] mb-6">
              Visítanos
            </h2>
            <p className="text-xl text-[#6b6b6b] font-light max-w-2xl mx-auto">
              Te esperamos en el corazón del Eixample para ofrecerte una experiencia de moda única
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-16">
              <div className="space-y-4">
                <div className="text-xs font-semibold tracking-[0.3em] text-[#9caf88] uppercase">
                  Dirección
                </div>
                <p className="text-2xl text-[#2d2d2d] leading-relaxed font-light">
                  C/ del Rosselló, 228<br />
                  08008 Eixample, Barcelona
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-xs font-semibold tracking-[0.3em] text-[#9caf88] uppercase">
                  Teléfono
                </div>
                <a
                  href="tel:931259586"
                  className="text-2xl text-[#2d2d2d] hover:text-[#7a9370] transition-colors font-light block"
                >
                  931 25 95 86
                </a>
              </div>

              <div className="space-y-4">
                <div className="text-xs font-semibold tracking-[0.3em] text-[#9caf88] uppercase">
                  Horarios
                </div>
                <div className="text-lg text-[#2d2d2d] space-y-2 font-light">
                  <div className="flex justify-between max-w-sm">
                    <span>Lunes a Viernes</span>
                    <span>10:00 - 20:30</span>
                  </div>
                  <div className="flex justify-between max-w-sm">
                    <span>Sábados</span>
                    <span>10:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between max-w-sm">
                    <span>Domingos</span>
                    <span className="text-[#9caf88]">Cerrado</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-xs font-semibold tracking-[0.3em] text-[#9caf88] uppercase">
                  Cómo llegar
                </div>
                <div className="text-lg text-[#6b6b6b] space-y-2 font-light">
                  <p>🚇 Metro: Diagonal (L3, L5)</p>
                  <p>🚌 Bus: 7, 22, 24, 28</p>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="https://instagram.com/clover.bcn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[#9caf88] hover:text-[#7a9370] transition-colors text-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="font-medium tracking-wide">@clover.bcn</span>
                </a>
              </div>
            </div>

            <div className="relative h-[700px] bg-[#f5f0e8] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1000&q=80"
                alt="CLOVER Barcelona Eixample"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-20 text-center">
            <button className="px-16 py-6 bg-[#9caf88] text-white text-sm font-medium tracking-[0.2em] hover:bg-[#7a9370] transition-all duration-300 shadow-lg">
              RESERVAR CITA PERSONALIZADA
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d2d2d] py-24">
        <div className="max-w-[1400px] mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="space-y-6">
              <div className="text-[40px] font-extralight tracking-[0.2em] text-white mb-4">
                CLOVER
              </div>
              <p className="text-base text-[#9caf88] font-light leading-relaxed">
                Moda consciente y atemporal en el corazón de Barcelona
              </p>
              <div className="flex gap-4 pt-4">
                <a href="https://instagram.com/clover.bcn" className="text-[#9caf88] hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-semibold tracking-[0.3em] text-[#9caf88] uppercase mb-6">
                Tienda
              </div>
              <a href="#" className="block text-base text-white/70 hover:text-[#9caf88] transition-colors font-light">
                Nueva Colección
              </a>
              <a href="#" className="block text-base text-white/70 hover:text-[#9caf88] transition-colors font-light">
                Lookbook
              </a>
              <a href="#" className="block text-base text-white/70 hover:text-[#9caf88] transition-colors font-light">
                Catálogo Completo
              </a>
              <a href="#" className="block text-base text-white/70 hover:text-[#9caf88] transition-colors font-light">
                Accesorios
              </a>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-semibold tracking-[0.3em] text-[#9caf88] uppercase mb-6">
                Información
              </div>
              <a href="#" className="block text-base text-white/70 hover:text-[#9caf88] transition-colors font-light">
                Sobre Nosotros
              </a>
              <a href="#" className="block text-base text-white/70 hover:text-[#9caf88] transition-colors font-light">
                Sostenibilidad
              </a>
              <a href="#" className="block text-base text-white/70 hover:text-[#9caf88] transition-colors font-light">
                Cuidado de Prendas
              </a>
              <a href="#" className="block text-base text-white/70 hover:text-[#9caf88] transition-colors font-light">
                Preguntas Frecuentes
              </a>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-semibold tracking-[0.3em] text-[#9caf88] uppercase mb-6">
                Contacto
              </div>
              <p className="text-base text-white/70 font-light">
                C/ del Rosselló, 228<br />
                08008 Barcelona
              </p>
              <a
                href="tel:931259586"
                className="block text-base text-white/70 hover:text-[#9caf88] transition-colors font-light"
              >
                931 25 95 86
              </a>
              <a
                href="mailto:info@clover.bcn"
                className="block text-base text-white/70 hover:text-[#9caf88] transition-colors font-light"
              >
                info@clover.bcn
              </a>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-white/40 font-light">
                © 2026 CLOVER Barcelona. Todos los derechos reservados.
              </p>
              <div className="flex gap-8 text-sm text-white/40 font-light">
                <a href="#" className="hover:text-[#9caf88] transition-colors">Política de Privacidad</a>
                <a href="#" className="hover:text-[#9caf88] transition-colors">Términos y Condiciones</a>
                <a href="#" className="hover:text-[#9caf88] transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
