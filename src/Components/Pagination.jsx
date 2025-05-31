import React, { useState } from "react";

const PAGE_SIZE = 10;
const DEFAULT_PAGE = 1;

const Pagination = ({ data, renderRow, pageSize = PAGE_SIZE }) => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const visibleData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / pageSize);

  const generatePageButtons = () => {
    const buttons = [];
  
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      buttons.push(1);
  
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
  
      if (start > 3) {
        buttons.push("...");
      } else if (start === 3) {
        buttons.push(2);
      }
  
      // Middle pages
      for (let i = start; i <= end; i++) {
        buttons.push(i);
      }
  
      // End ellipsis logic (optimized)
      if (end < totalPages - 2) {
        buttons.push("...");
      } else if (end === totalPages - 2) {
        buttons.push(totalPages - 1);
      }
  
      buttons.push(totalPages);
    }
  
    return buttons;
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" ">
        {visibleData.map((d) => (
          <div key={d} className="pagination-item">
            {renderRow(d)}
          </div>
        ))}
      </div>
      <div className="pagination-buttons flex items-center justify-center gap-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-2.5 py-1 border rounded-md border-blue-400 ${
            currentPage === 1
              ? " text-zinc-600 border-zinc-700 opacity-0"
              : "cursor-pointer"
          }  hover:border-transparent transition-all ease-in-out duration-300`}
        >
          Previous
        </button>
        {generatePageButtons().map((pageNumber, index) =>
          pageNumber === "..." ? (
            <span key={`ellipsis-${index}`} className="px-2.5 py-1">
              ...
            </span>
          ) : (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={`px-2.5 py-1 border rounded-md border-blue-400 cursor-pointer hover:bg-blue-500 hover:border-transparent transition-all ease-in-out duration-300 ${
                currentPage === pageNumber ? "bg-blue-500 text-white" : "bg-transparent text-blue-400"
              }`}
            >
              {pageNumber}
            </button>
          )
        )}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-2.5 py-1 border rounded-md border-blue-400 ${
            currentPage === totalPages
              ? " text-zinc-600 border-zinc-700 opacity-0"
              : "cursor-pointer"
          } hover:bg-blue-500 hover:border-transparent transition-all ease-in-out duration-300`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
