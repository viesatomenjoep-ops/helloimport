"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AuthPage() {
  return (
    <div className="min-h-screen flex bg-velvet-blue">
      {/* Image side */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image 
          src="/images/mercedes_interior.png" 
          alt="Luxury Interior" 
          fill 
          className="object-cover object-center" 
          priority
        />
        <div className="absolute inset-0 bg-velvet-blue/30 mix-blend-multiply" />
        <div className="absolute bottom-12 left-12 right-12 text-platinum p-8 bg-black/30 backdrop-blur-md rounded-2xl border border-white/10">
          <p className="font-serif text-3xl mb-4 text-champagne">"De perfecte brug tussen Europese passie en de Nederlandse weg."</p>
          <p className="text-sm uppercase tracking-widest text-platinum/70">— helloimport concierge</p>
        </div>
      </div>

      {/* Form side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
        <div className="w-full max-w-md bg-velvet-green/40 backdrop-blur-xl p-10 rounded-3xl border border-platinum/10 shadow-2xl">
          <div className="mb-10 text-center">
            <h1 className="font-serif text-4xl text-champagne mb-3">Members Only</h1>
            <p className="text-platinum/60 text-sm tracking-wide">Meld u aan voor toegang tot de portal.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs uppercase tracking-widest text-platinum/50 mb-2">E-mailadres</label>
              <input 
                type="email" 
                className="w-full bg-black/20 border-b border-platinum/20 px-0 py-3 text-white placeholder-platinum/30 focus:outline-none focus:border-champagne transition-colors" 
                placeholder="naam@voorbeeld.nl"
              />
            </div>
            
            <div>
              <label className="block text-xs uppercase tracking-widest text-platinum/50 mb-2">Wachtwoord</label>
              <input 
                type="password" 
                className="w-full bg-black/20 border-b border-platinum/20 px-0 py-3 text-white placeholder-platinum/30 focus:outline-none focus:border-champagne transition-colors" 
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded bg-black/20 border-platinum/20 text-champagne focus:ring-champagne" />
                <span className="text-sm text-platinum/60">Onthoud mij</span>
              </label>
              <a href="#" className="text-sm text-champagne hover:text-white transition-colors">Wachtwoord vergeten?</a>
            </div>

            <Button variant="gold" className="w-full h-12 mt-8">Inloggen</Button>
          </form>

          <p className="text-center text-sm text-platinum/50 mt-10">
            Nog geen account? <a href="#" className="text-champagne hover:text-white transition-colors">Vraag toegang aan</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
