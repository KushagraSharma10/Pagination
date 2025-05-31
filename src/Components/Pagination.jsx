import React, { useState } from "react";

const PAGE_SIZE = 10;
const DEFAULT_PAGE = 1;

const Pagination = ({ data, renderRow, pageSize = PAGE_SIZE }) => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const visibleData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / pageSize);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
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
        <button onClick={handlePreviousPage} disabled={currentPage === 1}
            className={`px-2.5 py-1 border rounded-md border-blue-400 ${currentPage === 1 ? "cursor-no-drop": "cursor-pointer"} hover:bg-blue-500 hover:border-transparent transition-all ease-in-out duration-300`}
        >
          Previous
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            className={`px-2.5 py-1 border rounded-md border-blue-400 cursor-pointer hover:bg-blue-500 hover:border-transparent transition-all ease-in-out duration-300
            ${currentPage === pageNumber ? "bg-blue-500 text-white" : "bg-transparent text-blue-400"}}
            `}
            key={pageNumber}
            onClick={()=> setCurrentPage(pageNumber)}

          >
            {pageNumber}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}
            className={`px-2.5 py-1 border rounded-md border-blue-400 ${currentPage === totalPages ? "cursor-no-drop": "cursor-pointer"} hover:bg-blue-500 hover:border-transparent transition-all ease-in-out duration-300`}
            >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
