"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function VaultPage() {
  return (
    <div className="min-h-screen bg-velvet-blue text-platinum py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-6 mb-12 border-b border-platinum/10 pb-8">
          <div className="w-16 h-16 rounded-2xl bg-velvet-green flex items-center justify-center p-3 shadow-lg shadow-black/50 border border-platinum/5">
            <Image src="/images/vault_icon.png" alt="Vault Icon" width={48} height={48} className="object-contain" />
          </div>
          <div>
            <h1 className="font-serif text-4xl text-champagne">De Kluis</h1>
            <p className="text-platinum/50 tracking-wider uppercase text-xs mt-2">Beveiligde Documenten Opslag</p>
          </div>
        </div>

        {/* Drag and drop zone */}
        <div className="border-2 border-dashed border-platinum/20 hover:border-champagne/50 transition-colors rounded-2xl bg-velvet-green/20 backdrop-blur-sm p-16 text-center cursor-pointer mb-12">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-black/40 flex items-center justify-center border border-platinum/10">
            <svg className="w-8 h-8 text-platinum/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          </div>
          <h3 className="font-serif text-2xl text-white mb-2">Sleep documenten hierheen</h3>
          <p className="text-platinum/60 mb-6">of klik om bestanden te selecteren</p>
          <Button variant="outline">Bladeren</Button>
        </div>

        {/* Recent files */}
        <div>
          <h3 className="font-serif text-xl text-champagne mb-6">Recente Documenten</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* File item 1 */}
            <div className="bg-black/20 border border-platinum/5 rounded-xl p-4 flex items-center gap-4 hover:bg-black/40 transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded bg-red-900/20 text-red-400 flex items-center justify-center text-xs font-bold border border-red-900/50">
                PDF
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm text-platinum truncate">CoC_Ferrari_250GTO.pdf</p>
                <p className="text-xs text-platinum/40">Gisteren, 14:30</p>
              </div>
            </div>

            {/* File item 2 */}
            <div className="bg-black/20 border border-platinum/5 rounded-xl p-4 flex items-center gap-4 hover:bg-black/40 transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded bg-blue-900/20 text-blue-400 flex items-center justify-center text-xs font-bold border border-blue-900/50">
                JPG
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm text-platinum truncate">Aankoopfactuur_IT.jpg</p>
                <p className="text-xs text-platinum/40">12 Nov 2026</p>
              </div>
            </div>
            
            {/* File item 3 */}
            <div className="bg-black/20 border border-platinum/5 rounded-xl p-4 flex items-center gap-4 hover:bg-black/40 transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded bg-red-900/20 text-red-400 flex items-center justify-center text-xs font-bold border border-red-900/50">
                PDF
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm text-platinum truncate">RDW_Keuringsbewijs.pdf</p>
                <p className="text-xs text-platinum/40">05 Nov 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
