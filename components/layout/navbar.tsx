"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-velvet-blue/80 backdrop-blur-md border-b border-platinum/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-wide text-champagne">
          helloimport.
        </Link>
        <div className="hidden md:flex gap-8 items-center text-sm uppercase tracking-widest text-platinum/80">
          <Link href="/calculator" className="hover:text-champagne transition-colors">Calculators</Link>
          <Link href="/vault" className="hover:text-champagne transition-colors">De Kluis</Link>
          <Link href="/auth" className="hover:text-champagne transition-colors">Members</Link>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="hidden sm:inline-flex">Inloggen</Button>
          <Button variant="gold">Import Starten</Button>
        </div>
      </div>
    </nav>
  );
}
