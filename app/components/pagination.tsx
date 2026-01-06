interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white rounded-2xl shadow-lg border border-slate-200 px-6 py-4 mt-4">
      <p className="text-sm text-slate-600 text-center sm:text-left font-medium">
        Mostrando <span className="text-blue-600 font-bold">{startItem}</span> a{' '}
        <span className="text-blue-600 font-bold">{endItem}</span> de{' '}
        <span className="text-blue-600 font-bold">{totalItems}</span> resultados
      </p>
      <div className="flex gap-2 items-center">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border-2 border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 hover:border-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-sm font-semibold transition-all"
        >
          ← Anterior
        </button>
        <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-bold border-2 border-blue-200">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border-2 border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 hover:border-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-sm font-semibold transition-all"
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
}
