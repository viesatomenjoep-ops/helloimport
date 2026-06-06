"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const vehicles = [
  { name: "Aston Martin DB5", year: "1964", specs: "4.0L I6, 282 hp", image: "/images/aston_db5.png" },
  { name: "Lamborghini Aventador SVJ", year: "2020", specs: "6.5L V12, 770 hp", image: "/images/lamborghini_svj.png" },
  { name: "Pagani Huayra", year: "2016", specs: "6.0L V12 Bi-Turbo, 730 hp", image: "/images/pagani_huayra.png" },
  { name: "Jaguar E-Type Series 1", year: "1963", specs: "3.8L I6, 265 hp", image: "/images/jaguar_etype.png" },
  { name: "McLaren P1", year: "2014", specs: "3.8L V8 Hybrid, 903 hp", image: "/images/mclaren_p1.png" },
  { name: "Ferrari F40", year: "1989", specs: "2.9L V8 Twin-Turbo, 471 hp", image: "/images/ferrari_f40.png" },
  { name: "Rolls-Royce Phantom VIII", year: "2023", specs: "6.75L V12, 563 hp", image: "/images/rolls_royce.png" },
  { name: "Porsche 959", year: "1988", specs: "2.8L Flat-6 Twin-Turbo, 444 hp", image: "/images/porsche_959.png" },
  { name: "Bugatti Divo", year: "2021", specs: "8.0L W16 Quad-Turbo, 1479 hp", image: "/images/bugatti_divo.png" },
  { name: "Mercedes-Benz SLS AMG", year: "2012", specs: "6.2L V8, 563 hp", image: "/images/mercedes_sls.png" }
]

const reviews = [
  { client: "J. de Vries", car: "Ferrari F40", text: "Een naadloos proces. Van inspectie in Italië tot aflevering in Laren, alles was tot in de puntjes verzorgd.", rating: 5 },
  { client: "C. van den Berg", car: "Porsche 959", text: "Uitzonderlijke service. Het team begreep exact wat deze klassieker nodig had qua documentatie en veilig transport.", rating: 5 },
  { client: "R. Jansen", car: "Aston Martin DB5", text: "Pure perfectie. De concierge service hield me dagelijks op de hoogte. Mijn droomauto staat eindelijk in de garage.", rating: 5 }
]

export default function Home() {
  const reviewRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: reviewRef,
    offset: ["start end", "end start"]
  })

  return (
    <div className="bg-velvet-blue min-h-screen text-platinum">
      
      {/* SECTION A: Hero & Waardepropositie */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/ferrari_gallery.png" 
            alt="Hero Background" 
            fill 
            className="object-cover object-center scale-105" 
            priority
          />
          {/* Deep Velvet Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-velvet-blue via-velvet-blue/60 to-black/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-serif text-6xl md:text-8xl text-champagne mb-8 leading-tight drop-shadow-2xl"
          >
            Driven by Perfection.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-platinum/90 font-light mb-12 max-w-2xl mx-auto"
          >
            Zorgeloos uw droomauto importeren uit heel Europa. Van exclusieve oldtimers tot moderne hypercars, wij verzorgen de inspectie, het beveiligde transport en de volledige RDW afhandeling.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button variant="gold" className="h-14 px-10 text-lg shadow-[0_0_30px_-5px_rgba(206,177,114,0.4)] hover:shadow-[0_0_50px_0_rgba(206,177,114,0.6)] transition-all duration-500">
              Start uw Import Traject
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SECTION B: Exclusieve Voertuigen Galerij */}
      <section className="py-32 bg-gradient-to-b from-velvet-blue to-[#080d14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl text-champagne mb-4">De Collectie</h2>
            <p className="text-platinum/60 tracking-widest uppercase text-sm">Masterpieces in Motion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vehicles.map((vehicle, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-champagne/30 transition-colors duration-500 shadow-xl"
              >
                <Image 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-xl text-white mb-1">{vehicle.name}</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="text-champagne text-sm mb-1">{vehicle.year}</p>
                    <p className="text-platinum/70 text-xs">{vehicle.specs}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION C: Succesverhalen & Reviews */}
      <section ref={reviewRef} className="py-32 relative overflow-hidden bg-[#080d14]">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="font-serif text-4xl text-champagne mb-4">Exclusiviteit, Geleverd.</h2>
            <p className="text-platinum/60 tracking-widest uppercase text-sm">Ervaringen van onze cliënten</p>
          </div>

          <div className="space-y-32">
            {reviews.map((review, i) => {
              const yRange = useTransform(scrollYProgress, [0, 1], [100 - (i * 50), -100 + (i * 50)])
              const opacityRange = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0])

              return (
                <motion.div 
                  key={i}
                  style={{ y: yRange }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 1 }}
                  className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
                >
                  <div className="w-full md:w-1/2 p-10 bg-velvet-green/20 backdrop-blur-md rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-champagne/0 via-champagne/10 to-champagne/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl" />
                    <div className="flex text-champagne mb-6">
                      {[...Array(review.rating)].map((_, j) => (
                        <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl text-platinum/90 font-light leading-relaxed mb-8 italic">"{review.text}"</p>
                    <div className="border-t border-white/10 pt-6">
                      <p className="font-serif text-lg text-champagne">{review.client}</p>
                      <p className="text-sm text-platinum/50 uppercase tracking-widest">{review.car}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
