import React from 'react';

const CategorySelector = ({ setCategory }) => {
  const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  return (
    <div className="my-4">
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border rounded"
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
