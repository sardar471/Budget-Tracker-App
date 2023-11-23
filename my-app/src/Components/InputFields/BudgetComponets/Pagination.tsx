// PaginationContainer.tsx
import React from 'react';

interface PaginationContainerProps {
  perPage: number;
  currentPage: number;
  handleRowsPerPageChange: (rows: number) => void;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationContainerProps> = ({
  perPage,
  currentPage,
  handleRowsPerPageChange,
  totalPages,
  setCurrentPage,
}) => (
  <div className="pagination-container">
    <label>
      Rows per page:
      <select value={perPage} onChange={(e) => handleRowsPerPageChange(Number(e.target.value))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
    </label>
    <label>
      Pages:
      <select value={currentPage + 1} onChange={(e) => setCurrentPage(Number(e.target.value) - 1)}>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <option key={page} value={page}>
            {page}
          </option>
        ))}
      </select>
    </label>
  </div>
);

export default Pagination;
