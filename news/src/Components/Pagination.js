import React from 'react';

const Pagination = ({ totalResults, currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults / 20); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="flex justify-center space-x-2">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`${
              number === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
            } px-4 py-2 rounded cursor-pointer`}
          >
            <a onClick={() => setCurrentPage(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
