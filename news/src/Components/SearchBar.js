import React, { useState } from 'react';

const SearchBar = ({ setSearchKeyword }) => {
  const [keyword, setKeyword] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchKeyword(keyword);
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center mb-4">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search news..."
        className="p-2 border rounded w-1/2"
      />
      <button type="submit" className="p-2 ml-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
