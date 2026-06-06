import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-velvet-blue border-t border-platinum/10 py-12 text-platinum/60">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-serif text-xl tracking-wide text-champagne/80">helloimport.</p>
        <div className="flex gap-6 text-sm uppercase tracking-wider">
          <Link href="#" className="hover:text-platinum transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-platinum transition-colors">Voorwaarden</Link>
          <Link href="#" className="hover:text-platinum transition-colors">Contact</Link>
        </div>
        <p className="text-xs">&copy; {new Date().getFullYear()} DAS Import Platform. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  );
}
