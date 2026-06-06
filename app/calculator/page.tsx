"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"

export default function CalculatorPage() {
  const [step, setStep] = useState(1)
  const [country, setCountry] = useState("Duitsland")
  const [vehicleType, setVehicleType] = useState("Supercar")
  const [serviceLevel, setServiceLevel] = useState("Premium")

  // Example calculations based on selections
  const transportCost = country === 'Italië' || country === 'Spanje' ? 2150 : 1250
  const bpmCost = vehicleType === 'Oldtimer' ? 0 : 24500
  const handlingCost = serviceLevel === 'VIP' ? 1450 : 950
  const totalCost = transportCost + bpmCost + handlingCost

  const nextStep = () => setStep(s => Math.min(s + 1, 3))
  const prevStep = () => setStep(s => Math.max(s - 1, 1))

  return (
    <div className="min-h-screen bg-[#080d14] text-platinum py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header & Progress */}
        <div className="mb-16">
          <h1 className="font-serif text-5xl text-champagne mb-4">Import Calculator</h1>
          <p className="text-platinum/50 tracking-wider uppercase text-xs mb-8">Real-time kostenindicatie dashboard</p>
          
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 w-full h-[1px] bg-white/10 -z-10" />
            {[1, 2, 3].map(i => (
              <div key={i} className="flex flex-col items-center gap-2 bg-[#080d14] px-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-serif transition-colors duration-500 ${step >= i ? 'bg-champagne text-[#080d14] shadow-[0_0_15px_rgba(206,177,114,0.5)]' : 'bg-black border border-white/10 text-platinum/50'}`}>
                  {i}
                </div>
                <span className={`text-xs uppercase tracking-widest ${step >= i ? 'text-champagne' : 'text-platinum/30'}`}>
                  {i === 1 ? 'Voertuig' : i === 2 ? 'Service' : 'Dashboard'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Form Container */}
        <div className="bg-velvet-green/10 border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {/* STEP 1 */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <div>
                  <label className="block text-xs uppercase tracking-widest text-platinum/50 mb-4">Land van Herkomst</label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {["Duitsland", "België", "Frankrijk", "Italië", "Spanje"].map(c => (
                      <button 
                        key={c}
                        onClick={() => setCountry(c)}
                        className={`py-4 px-4 rounded-xl border text-sm transition-all duration-300 ${country === c ? 'border-champagne bg-champagne/10 text-champagne shadow-[0_0_15px_rgba(206,177,114,0.15)]' : 'border-white/5 bg-black/40 hover:bg-black/60 hover:border-white/20 text-platinum/80'}`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-platinum/50 mb-4">Type Voertuig</label>
                  <div className="grid grid-cols-2 gap-4">
                    {["Supercar / Hypercar", "Oldtimer / Klassieker"].map(t => {
                      const typeValue = t.split(' ')[0]
                      return (
                        <button 
                          key={t}
                          onClick={() => setVehicleType(typeValue)}
                          className={`p-6 rounded-xl border text-left transition-all duration-300 ${vehicleType === typeValue ? 'border-champagne bg-champagne/10' : 'border-white/5 bg-black/40 hover:bg-black/60 hover:border-white/20'}`}
                        >
                          <h4 className={`font-serif text-xl mb-2 ${vehicleType === typeValue ? 'text-champagne' : 'text-platinum'}`}>{t}</h4>
                          <p className="text-xs text-platinum/50 uppercase tracking-widest">
                            {typeValue === 'Oldtimer' ? 'Vrijstelling BPM mogelijk' : 'Volledige BPM calculatie'}
                          </p>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="flex justify-end pt-6">
                  <Button variant="gold" onClick={nextStep} className="h-12 px-8 flex items-center gap-2">
                    Volgende Stap <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <div>
                  <label className="block text-xs uppercase tracking-widest text-platinum/50 mb-4">RDW & Handling Service Level</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <button 
                      onClick={() => setServiceLevel('Premium')}
                      className={`p-8 rounded-xl border text-left transition-all duration-300 ${serviceLevel === 'Premium' ? 'border-champagne bg-champagne/10 shadow-[0_0_15px_rgba(206,177,114,0.1)]' : 'border-white/5 bg-black/40 hover:border-white/20'}`}
                    >
                      <h4 className="font-serif text-2xl text-platinum mb-4">Premium Handling</h4>
                      <ul className="space-y-3 text-sm text-platinum/70">
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-champagne" /> Basis RDW Keuring</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-champagne" /> Aangifte BPM</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-champagne" /> Kentekenplaten montage</li>
                      </ul>
                    </button>

                    <button 
                      onClick={() => setServiceLevel('VIP')}
                      className={`p-8 rounded-xl border text-left transition-all duration-300 ${serviceLevel === 'VIP' ? 'border-champagne bg-champagne/10 shadow-[0_0_15px_rgba(206,177,114,0.1)]' : 'border-white/5 bg-black/40 hover:border-white/20'}`}
                    >
                      <h4 className="font-serif text-2xl text-champagne mb-4">VIP Concierge</h4>
                      <ul className="space-y-3 text-sm text-platinum/70">
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-champagne" /> Alles van Premium</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-champagne" /> Volledige detailing & poetsbeurt</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-champagne" /> Gesloten transport tot aan de deur</li>
                      </ul>
                    </button>
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <Button variant="outline" onClick={prevStep} className="h-12 px-8 flex items-center gap-2 border-white/10 hover:border-white/30 text-platinum">
                    <ArrowLeft className="w-4 h-4" /> Terug
                  </Button>
                  <Button variant="gold" onClick={nextStep} className="h-12 px-8 flex items-center gap-2">
                    Bereken Resultaat <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 3 - Realtime Result Dashboard */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-black/40 p-6 rounded-xl border border-white/5">
                    <p className="text-xs uppercase tracking-widest text-platinum/50 mb-2">Transport ({country})</p>
                    <p className="font-serif text-3xl text-white">€ {transportCost.toLocaleString('nl-NL')}</p>
                  </div>
                  <div className="bg-black/40 p-6 rounded-xl border border-white/5">
                    <p className="text-xs uppercase tracking-widest text-platinum/50 mb-2">BPM Indicatie</p>
                    <p className="font-serif text-3xl text-white">€ {bpmCost.toLocaleString('nl-NL')}</p>
                  </div>
                  <div className="bg-black/40 p-6 rounded-xl border border-white/5">
                    <p className="text-xs uppercase tracking-widest text-platinum/50 mb-2">Service ({serviceLevel})</p>
                    <p className="font-serif text-3xl text-white">€ {handlingCost.toLocaleString('nl-NL')}</p>
                  </div>
                </div>

                <div className="bg-champagne/5 p-8 rounded-2xl border border-champagne/20 flex flex-col md:flex-row items-center justify-between gap-8 mt-8">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-champagne mb-2">Totaal Geschatte Importkosten</p>
                    <p className="font-serif text-5xl text-champagne drop-shadow-lg">€ {totalCost.toLocaleString('nl-NL')}</p>
                    <p className="text-sm text-platinum/50 mt-3">Levertijd indicatie: {country === 'Italië' || country === 'Spanje' ? '10-14 werkdagen' : '5-8 werkdagen'}</p>
                  </div>
                  <Button variant="gold" className="h-14 px-10 text-lg w-full md:w-auto shadow-[0_0_30px_-5px_rgba(206,177,114,0.4)]">
                    Offerte Aanvragen
                  </Button>
                </div>

                <div className="flex justify-start pt-6">
                  <Button variant="outline" onClick={prevStep} className="h-12 px-8 flex items-center gap-2 border-white/10 hover:border-white/30 text-platinum">
                    <ArrowLeft className="w-4 h-4" /> Terug naar opties
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
