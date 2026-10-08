function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-3 my-10">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-12 h-12 flex items-center justify-center font-semibold transition-colors cursor-pointer ${
            page === currentPage
              ? "bg-[#B88E2F] text-white"
              : "bg-[#F9F1E7] text-[#3A3A3A] hover:bg-[#B88E2F] hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-6 h-12 flex items-center justify-center font-semibold bg-[#F9F1E7] text-[#3A3A3A] hover:bg-[#B88E2F] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
