import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by city, locality..."
        className="w-full px-4 py-2 mb-2 border h-fit rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;