// src/pages/Capsules.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCapsulesData } from '../redux/capsulesSlice';
import { DataGrid } from '../components/DataGrid';

export const Capsules = () => {
  const dispatch = useDispatch();
  const capsules = useSelector((state) => state?.capsules?.data);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    dispatch(fetchAllCapsulesData());
  }, [dispatch]);

  // Calculate the range of items to display for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = capsules.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(capsules.length / itemsPerPage);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800">
      <main className="flex-grow">
        <DataGrid props={currentItems} type='capsules' />

        <div className="flex justify-center mt-4">
          <button
            className={`${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
            } bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l`}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span className="bg-blue-500 text-white font-bold py-2 px-4">
            {currentPage} of {totalPages}
          </span>

          <button
            className={`${
              indexOfLastItem >= capsules.length ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
            } bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r`}
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastItem >= capsules.length}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};
