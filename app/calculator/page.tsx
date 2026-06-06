"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion } from "framer-motion"

export default function CalculatorPage() {
  const [country, setCountry] = useState("Duitsland")
  const [vehicleType, setVehicleType] = useState("Supercar")

  return (
    <div className="min-h-screen bg-velvet-blue text-platinum py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-champagne mb-4">Import Calculator</h1>
          <p className="text-platinum/60 tracking-wider uppercase text-sm">Bereken real-time uw BPM en transportkosten</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form UI */}
          <div className="bg-velvet-green/50 backdrop-blur-md p-8 rounded-2xl border border-platinum/10 shadow-2xl">
            <div className="flex flex-col gap-8">
              <div>
                <label className="block text-xs uppercase tracking-widest text-platinum/50 mb-3">Land van Herkomst</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {["Duitsland", "Italië", "Spanje", "België", "Frankrijk"].map(c => (
                    <button 
                      key={c}
                      onClick={() => setCountry(c)}
                      className={`py-3 px-4 rounded-lg border text-sm transition-all ${country === c ? 'border-champagne text-champagne bg-champagne/10' : 'border-platinum/10 hover:border-platinum/30 text-platinum'}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-platinum/50 mb-3">Type Voertuig</label>
                <div className="grid grid-cols-2 gap-3">
                  {["Oldtimer", "Supercar"].map(t => (
                    <button 
                      key={t}
                      onClick={() => setVehicleType(t)}
                      className={`py-3 px-4 rounded-lg border text-sm transition-all ${vehicleType === t ? 'border-champagne text-champagne bg-champagne/10' : 'border-platinum/10 hover:border-platinum/30 text-platinum'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-platinum/50 mb-3">Bouwjaar</label>
                <input type="number" placeholder="YYYY" className="w-full bg-black/20 border border-platinum/10 rounded-lg py-3 px-4 text-platinum focus:outline-none focus:border-champagne/50 transition-colors" />
              </div>

              <Button variant="gold" className="w-full mt-4 h-14 text-lg">Bereken Kosten</Button>
            </div>
          </div>

          {/* Results UI */}
          <div className="relative overflow-hidden rounded-2xl border border-platinum/10 bg-black/40">
            <div className="absolute inset-0 z-0 opacity-20">
              <Image src="/images/calculator_abstract.png" alt="Calculator Background" fill className="object-cover" />
            </div>
            
            <div className="relative z-10 p-10">
              <h3 className="font-serif text-3xl text-champagne mb-8">Indicatie Kosten</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-platinum/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-platinum/50 mb-1">Rest-BPM</p>
                    <p className="text-sm text-platinum/80">Op basis van historische data</p>
                  </div>
                  <span className="font-serif text-2xl text-white">€ {vehicleType === 'Oldtimer' ? '0' : '24.500'}</span>
                </div>

                <div className="flex justify-between items-end border-b border-platinum/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-platinum/50 mb-1">Verzekerd Transport</p>
                    <p className="text-sm text-platinum/80">Gesloten trailer vanuit {country}</p>
                  </div>
                  <span className="font-serif text-2xl text-white">€ {country === 'Italië' || country === 'Spanje' ? '2.150' : '1.250'}</span>
                </div>

                <div className="flex justify-between items-end border-b border-platinum/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-platinum/50 mb-1">Handling & RDW</p>
                    <p className="text-sm text-platinum/80">Premium service fee</p>
                  </div>
                  <span className="font-serif text-2xl text-white">€ 950</span>
                </div>

                <div className="flex justify-between items-end pt-4">
                  <span className="text-sm uppercase tracking-widest text-champagne">Totaal Indicatie</span>
                  <span className="font-serif text-4xl text-champagne">
                    € {vehicleType === 'Oldtimer' ? (country === 'Italië' || country === 'Spanje' ? '3.100' : '2.200') : (country === 'Italië' || country === 'Spanje' ? '27.600' : '26.700')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
