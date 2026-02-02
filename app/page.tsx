import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-light tracking-wider text-sage-dark">
              CLOVER
            </Link>
            <div className="hidden md:flex space-x-8">
              <a href="#nueva-coleccion" className="text-gray hover:text-sage-dark transition-colors">Nueva Colección</a>
              <a href="#catalogo" className="text-gray hover:text-sage-dark transition-colors">Catálogo</a>
              <a href="#estilismos" className="text-gray hover:text-sage-dark transition-colors">Estilismos</a>
              <a href="#nosotros" className="text-gray hover:text-sage-dark transition-colors">Nosotros</a>
              <a href="#ubicacion" className="text-gray hover:text-sage-dark transition-colors">Ubicación</a>
            </div>
            <a
              href="https://instagram.com/clover.bcn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sage-dark hover:text-sage transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-sm">@clover.bcn</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-beige-light">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
            alt="CLOVER Fashion Store"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-light tracking-widest text-charcoal mb-6">
            CLOVER
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray mb-12 max-w-2xl mx-auto">
            Moda consciente y atemporal en el corazón del Eixample
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#catalogo"
              className="px-8 py-4 bg-sage text-white hover:bg-sage-dark transition-colors text-lg font-light"
            >
              Explora la colección
            </a>
            <a
              href="https://instagram.com/clover.bcn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-sage text-sage hover:bg-sage hover:text-white transition-colors text-lg font-light"
            >
              Síguenos en Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Nueva Colección */}
      <section id="nueva-coleccion" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-charcoal mb-4">
              Nueva Colección
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Descubre las últimas tendencias pensadas para un estilo único y personal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
                title: "Esenciales de Temporada",
                desc: "Prendas básicas reinventadas"
              },
              {
                img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
                title: "Colección Cápsula",
                desc: "Piezas versátiles y atemporales"
              },
              {
                img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
                title: "Accesorios",
                desc: "Complementos que marcan la diferencia"
              }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-96 overflow-hidden mb-4">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-light text-charcoal mb-2">{item.title}</h3>
                <p className="text-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="py-24 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-charcoal mb-4">
              Catálogo
            </h2>
            <p className="text-lg text-gray">
              Explora toda nuestra colección
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80", name: "Vestidos" },
              { img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80", name: "Pantalones" },
              { img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80", name: "Blusas" },
              { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80", name: "Chaquetas" },
              { img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80", name: "Faldas" },
              { img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80", name: "Zapatos" },
              { img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80", name: "Bolsos" },
              { img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80", name: "Accesorios" }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-64 overflow-hidden mb-3">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-center text-charcoal font-light">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estilismos */}
      <section id="estilismos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-charcoal mb-4">
              Estilismos
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Inspírate con nuestras propuestas de looks completos para cada ocasión
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&q=80",
                title: "Look Casual Urbano",
                items: ["Blusa de lino beige", "Pantalón wide-leg", "Sandalias de tiras"]
              },
              {
                img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1000&q=80",
                title: "Elegancia Minimalista",
                items: ["Vestido midi", "Blazer oversize", "Botines"]
              }
            ].map((look, idx) => (
              <div key={idx} className="bg-beige-light p-8">
                <div className="relative h-96 mb-6">
                  <Image
                    src={look.img}
                    alt={look.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-light text-charcoal mb-4">{look.title}</h3>
                <ul className="space-y-2">
                  {look.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray">
                      <span className="w-2 h-2 bg-sage rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="flex text-sage text-2xl">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              <span className="ml-3 text-2xl font-light text-charcoal">4.7</span>
            </div>
            <p className="text-gray">130 reseñas en Google</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "María G.",
                text: "Una tienda preciosa con prendas de calidad. El trato es excelente y siempre encuentro algo especial.",
                rating: 5
              },
              {
                name: "Laura M.",
                text: "Me encanta la selección de ropa. Todo es muy bonito y la atención al cliente es inmejorable.",
                rating: 5
              },
              {
                name: "Ana S.",
                text: "Mi tienda favorita en Barcelona. Las prendas son únicas y el ambiente es súper acogedor.",
                rating: 5
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8">
                <div className="flex text-sage mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                <p className="text-charcoal font-light">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&q=80"
                alt="CLOVER Store Interior"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide text-charcoal mb-6">
                Sobre Nosotros
              </h2>
              <div className="space-y-4 text-gray text-lg">
                <p>
                  CLOVER nace de la pasión por la moda consciente y atemporal. Creemos en prendas que trascienden las tendencias pasajeras y se convierten en esenciales de tu armario.
                </p>
                <p>
                  Seleccionamos cuidadosamente cada pieza, priorizando la calidad, la sostenibilidad y el diseño único. Nuestro espacio en el Eixample es más que una tienda, es un lugar de inspiración donde descubrir tu propio estilo.
                </p>
                <p>
                  Te invitamos a visitarnos y dejarte sorprender por nuestra colección exclusiva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación y Horarios */}
      <section id="ubicacion" className="py-24 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-charcoal mb-4">
              Visítanos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 md:p-12">
              <h3 className="text-2xl font-light text-charcoal mb-8">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-sage mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-charcoal font-light">C/ del Rosselló, 228</p>
                    <p className="text-gray">Eixample, Barcelona</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-sage mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <a href="tel:931259586" className="text-charcoal hover:text-sage transition-colors">
                      931 25 95 86
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-sage mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <div>
                    <a href="https://instagram.com/clover.bcn" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-sage transition-colors">
                      @clover.bcn
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-xl font-light text-charcoal mb-4">Horarios</h4>
                <div className="space-y-2 text-gray">
                  <p>Lunes a Viernes: 10:00 - 20:30</p>
                  <p>Sábados: 10:00 - 21:00</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
            </div>

            <div className="h-96 md:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.2157847447237!2d2.1562345!3d41.3939727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2917f0b9c5d%3A0x0!2zNDHCsDIzJzM4LjMiTiAywrAwOSczOC40IkU!5e0!3m2!1sen!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-light tracking-wider mb-4">CLOVER</h3>
              <p className="text-gray-400 font-light">
                Moda consciente y atemporal en Barcelona
              </p>
            </div>

            <div>
              <h4 className="text-lg font-light mb-4">Enlaces</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#nueva-coleccion" className="hover:text-sage transition-colors">Nueva Colección</a></li>
                <li><a href="#catalogo" className="hover:text-sage transition-colors">Catálogo</a></li>
                <li><a href="#estilismos" className="hover:text-sage transition-colors">Estilismos</a></li>
                <li><a href="#nosotros" className="hover:text-sage transition-colors">Sobre Nosotros</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-light mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>C/ del Rosselló, 228, Barcelona</li>
                <li><a href="tel:931259586" className="hover:text-sage transition-colors">931 25 95 86</a></li>
                <li>
                  <a href="https://instagram.com/clover.bcn" target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors">
                    @clover.bcn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} CLOVER Barcelona. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
