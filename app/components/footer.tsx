export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 mt-auto border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm">
              © {2026} <span className="font-bold text-white">Recetas App</span>{' '}
              - Desarrollado por{' '}
              <span className="font-semibold text-blue-400">
                Julio González
              </span>
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Prueba técnica - Novopayment
            </p>
          </div>
          <div className="flex gap-4 text-xs text-slate-400">
            <span>Next.js 16</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
