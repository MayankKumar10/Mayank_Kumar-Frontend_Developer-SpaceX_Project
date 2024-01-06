// src/pages/Rockets.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRocketData } from '../redux/spacexSlice';
import { DataGrid } from '../components/DataGrid';

export const Rockets = () => {

  const rockets = useSelector((state)=>state?.spacex?.data)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRocketData())
  }, [dispatch]);


  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800">
      <main className="flex-grow">
        <DataGrid props={rockets} type= "rockets" />
      </main>
    </div>
  );
};
