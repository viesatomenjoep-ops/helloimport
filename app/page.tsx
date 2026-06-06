"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/ferrari_gallery.png" 
            alt="Art on Wheels - Ferrari 250 GTO" 
            fill 
            className="object-cover object-center opacity-40 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-velvet-blue/60 via-transparent to-velvet-blue" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-champagne mb-6"
          >
            Art on Wheels.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-platinum/80 uppercase tracking-[0.2em] mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Het meest exclusieve import platform voor oldtimers, supercars en hypercars.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button variant="gold" className="h-14 px-10 text-lg">Dossier Aanmaken</Button>
            <Button variant="outline" className="h-14 px-10 text-lg">Ontdek De Kluis</Button>
          </motion.div>
        </div>
      </section>

      {/* Realtime Status Bar (Mock) */}
      <section className="bg-velvet-green border-y border-platinum/10 relative z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-champagne animate-pulse" />
              <h2 className="font-serif text-2xl text-champagne">Actieve Dossiers</h2>
            </div>
            
            <div className="flex-1 w-full flex overflow-x-auto gap-6 pb-2 md:pb-0 hide-scrollbar">
              {/* Status Item 1 */}
              <div className="flex-shrink-0 bg-black/20 p-4 rounded-lg border border-platinum/5 min-w-[300px]">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs uppercase tracking-wider text-platinum/50">Dossier #92A</span>
                  <span className="text-xs px-2 py-1 bg-champagne/10 text-champagne rounded">Transport Gepland</span>
                </div>
                <h3 className="font-serif text-lg">Porsche 911 (1969)</h3>
                <p className="text-sm text-platinum/60 mt-1">Verwacht in NL: 12 Nov</p>
              </div>

              {/* Status Item 2 */}
              <div className="flex-shrink-0 bg-black/20 p-4 rounded-lg border border-platinum/5 min-w-[300px]">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs uppercase tracking-wider text-platinum/50">Dossier #14B</span>
                  <span className="text-xs px-2 py-1 bg-white/10 text-platinum rounded">In afwachting RDW</span>
                </div>
                <h3 className="font-serif text-lg">Bugatti Chiron</h3>
                <p className="text-sm text-platinum/60 mt-1">Keuringsdatum: 14 Nov</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Visual Break with Image 10 */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl text-champagne mb-6">De Digitale Kluis</h2>
            <p className="text-platinum/70 text-lg leading-relaxed mb-8">
              Vergeet papierwerk. Onze cloud-vault bewaart elk document, van CoC tot aankoopfactuur, in een extreem beveiligde omgeving. Altijd toegankelijk, prachtig gepresenteerd.
            </p>
            <Button variant="outline">Meer informatie</Button>
          </div>
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-platinum/10">
             <Image src="/images/dashboard_lifestyle.png" alt="Dashboard Lifestyle" fill className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
