// src/components/SearchForm.jsx
import React, { useState } from 'react';

export const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [launchDateFilter, setLaunchDateFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const handleSearch = () => {
    onSearch({
      searchTerm,
      statusFilter,
      launchDateFilter,
      typeFilter,
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 my-4 mx-auto">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-4/6 sm:w-30 mx-auto border p-2 rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300 text-gray-800"
      />
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="w-4/6 sm:w-30 mx-auto border p-2 rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300 text-gray-800"
      >
        <option value="">Select Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <input
        type="date"
        value={launchDateFilter}
        onChange={(e) => setLaunchDateFilter(e.target.value)}
        className="w-4/6 sm:w-30 mx-auto border p-2 rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300 text-gray-800"
      />
      <select
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
        className="w-4/6 sm:w-30 mx-auto border p-2 rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300 text-gray-800"
      >
        <option value="">Select Type</option>
        <option value="type1">Type 1</option>
        <option value="type2">Type 2</option>
      </select>
      <button
        onClick={handleSearch}
        className="w-4/6 sm:w-30 mx-auto bg-blue-500 text-white p-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Search
      </button>
    </div>
  );
};
