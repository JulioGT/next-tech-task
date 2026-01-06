export default function Navbar() {
  return (
    <nav className="bg-linear-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg border-b border-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
              <svg
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.5 1.5c-1.2 0-2.3.4-3.2 1.1-.7-.4-1.5-.6-2.3-.6-2.5 0-4.5 2-4.5 4.5 0 .8.2 1.6.6 2.3C1.9 9.7 1.5 10.8 1.5 12c0 1.9 1.3 3.5 3 4v5.5c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5V16c1.7-.5 3-2.1 3-4 0-1.2-.4-2.3-1.1-3.2.4-.7.6-1.5.6-2.3 0-2.5-2-4.5-4.5-4.5-.8 0-1.6.2-2.3.6-.9-.7-2-1.1-3.2-1.1zm0 2c.8 0 1.6.3 2.2.9l.8.8.8-.8c.6-.6 1.4-.9 2.2-.9 1.4 0 2.5 1.1 2.5 2.5 0 .5-.2 1.1-.5 1.5l-.8.8.8.8c.3.4.5.9.5 1.4 0 1.4-1.1 2.5-2.5 2.5h-10c-1.4 0-2.5-1.1-2.5-2.5 0-.5.2-1 .5-1.4l.8-.8-.8-.8c-.3-.4-.5-.9-.5-1.5 0-1.4 1.1-2.5 2.5-2.5.8 0 1.6.3 2.2.9l.8.8.8-.8c.6-.6 1.4-.9 2.2-.9zM6 14h12v6.5c0 .3-.2.5-.5.5h-11c-.3 0-.5-.2-.5-.5V14z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Recetas <span className="text-blue-300">App</span>
            </span>
          </div>

          {/* Search and Login */}
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Buscar recetas..."
                className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 text-white placeholder-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm transition-all"
                disabled
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button
              className="px-5 py-2 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-all font-semibold shadow-md hover:shadow-lg"
              disabled
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
