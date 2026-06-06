"use client"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 bg-velvet-blue/90 backdrop-blur-xl border border-platinum/20 shadow-2xl rounded-2xl overflow-hidden"
          >
            <div className="p-4 bg-black/40 border-b border-platinum/10 flex justify-between items-center">
              <span className="font-serif text-champagne text-lg">Concierge</span>
              <button onClick={() => setIsOpen(false)} className="text-platinum/50 hover:text-platinum">✕</button>
            </div>
            <div className="h-64 p-4 flex flex-col gap-3 overflow-y-auto">
              <div className="bg-white/5 p-3 rounded-lg text-sm text-platinum self-start max-w-[80%] leading-relaxed">
                Welkom bij de exclusieve service van helloimport. Hoe kan ik u assisteren met uw voertuig import?
              </div>
            </div>
            <div className="p-4 border-t border-platinum/10 bg-black/20">
              <input type="text" placeholder="Stel uw vraag..." className="w-full bg-transparent border-none text-sm text-platinum placeholder:text-platinum/40 focus:outline-none" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-velvet-blue border border-champagne/40 shadow-[0_0_20px_rgba(212,175,55,0.2)] flex items-center justify-center hover:scale-105 transition-transform overflow-hidden p-3"
      >
        <Image src="/images/chatbot_avatar.png" alt="Concierge" width={40} height={40} className="object-contain" />
      </button>
    </div>
  )
}
