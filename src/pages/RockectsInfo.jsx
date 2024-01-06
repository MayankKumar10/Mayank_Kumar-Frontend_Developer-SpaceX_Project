// src/pages/RocketsInfo.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Badge, Card } from 'flowbite-react';
import { fetchOneRocket } from '../redux/spacexSlice';

export const RockectsInfo = () => {
  const { rocketId } = useParams();
  const rocket = useSelector((state) => state?.spacex?.rocket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneRocket(rocketId));
  }, [rocketId, dispatch]);

  // Function to format the launch date
  const formatLaunchDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Function to format cost in thousands, millions, and billions
  const formatCost = (cost) => {
    const billion = 1000000000;
    const million = 1000000;
    const thousand = 1000;

    if (cost >= billion) {
      return `${(cost / billion).toFixed(2)}B USD`;
    } else if (cost >= million) {
      return `${(cost / million).toFixed(2)}M USD`;
    } else if (cost >= thousand) {
      return `${(cost / thousand).toFixed(2)}K USD`;
    } else {
      return `${cost} USD`;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800">
      <main className="flex-grow p-4">
        {rocket && rocket?.length !== 0 && rocket !== undefined ? (
          <Card className="max-w-full lg:max-w-2xl mx-auto" imgSrc={rocket && rocket?.flickr_images[1] || ''} horizontal>

          <div className="flex flex-row justify-between items-center flex-wrap gap-2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {rocket?.rocket_name}
            </h5>

            <Badge
                color={`${rocket.active ? 'green' : 'red'}`}
                size="sm"
              >
                {rocket.active ? 'Active' : 'Not Active'}
              </Badge>
              </div>

            <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
              <strong>First Flight:</strong> {rocket ? formatLaunchDate(rocket?.first_flight) : 'N/A'}
            </p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
              <strong>Country:</strong> {rocket?.country || 'N/A'}
            </p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
              <strong>Success Rate:</strong> {rocket?.success_rate_pct || 'N/A'}%
            </p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
              <strong>Cost per Launch:</strong> {rocket ? formatCost(rocket?.cost_per_launch) : 'N/A'}
            </p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
              <strong>Description:</strong> {rocket?.description || 'Description is not available'}
            </p>
          </Card>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
};
