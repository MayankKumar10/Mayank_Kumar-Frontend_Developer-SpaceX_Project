// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import { SearchForm } from '../components/SearchForm';
import { DataGrid } from '../components/DataGrid';
import { Banner } from '../components/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRocketData } from '../redux/spacexSlice';

export const HomePage = () => {
  const [filteredRockets, setFilteredRockets] = useState([]);
  const rockets = useSelector((state) => state?.spacex?.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRocketData());
  }, [dispatch]);

  const handleSearch = ({ searchTerm, statusFilter, launchDateFilter, typeFilter }) => {
    const filtered = rockets.filter((rocket) => {
      const nameMatch = searchTerm
        ? rocket.rocket_name.toLowerCase().split(' ').join('').includes(searchTerm.toLowerCase())
        : true;

      const statusMatch = statusFilter
        ? (rocket.active === (statusFilter === 'active'))
        : true;

      const launchDateMatch = launchDateFilter
        ? new Date(rocket.first_flight).toISOString().includes(launchDateFilter)
        : true;

      const typeMatch = typeFilter
        ? rocket.rocket_type.toLowerCase().includes(typeFilter.toLowerCase())
        : true;

      return nameMatch && statusMatch && launchDateMatch && typeMatch;
    });

    setFilteredRockets(filtered);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800">
      <main className="flex-grow">
        <Banner rockets={rockets} />
        <SearchForm onSearch={handleSearch} />
        <DataGrid props={filteredRockets.length > 0 ? filteredRockets : rockets} type="rockets" />
      </main>
    </div>
  );
};
