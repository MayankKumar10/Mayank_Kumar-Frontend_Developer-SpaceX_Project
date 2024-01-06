// src/pages/CapsuleInfo.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Badge, Card } from 'flowbite-react';
import { fetchOneCapsule } from '../redux/capsulesSlice';

export const CapsuleInfo = () => {
  const { capsuleId } = useParams();
  const capsule = useSelector((state) => state?.capsules?.capsule);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneCapsule(capsuleId));
  }, [capsuleId, dispatch]);

  // Function to format the date
  const formatLaunchDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800">
      <main className="flex-grow p-4">
        { capsule.length !==0 && capsule !== undefined ? <Card className="max-w-full lg:max-w-2xl mx-auto" imgSrc="/images/blog/image-4.jpg" horizontal>
          
        <div className="flex flex-row justify-between items-center flex-wrap gap-4">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {`${capsule?.capsule_id?.charAt(0)?.toUpperCase() + capsule?.capsule_id?.slice(1)} (${capsule?.capsule_serial})`}
          </h5>
          <Badge
            color={`${capsule?.status === 'active' ? 'green' : capsule?.status === 'unknown' ? 'warning' : capsule?.status === 'retired' ? 'red' : 'indigo'}`}
            size="sm"
          >
            {capsule?.status}
          </Badge>
        </div>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
            <strong>Mission:</strong> {capsule?.missions[0]?.name || 'N/A'}
          </p>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
            <strong>Status:</strong> {capsule?.status || 'N/A'}
          </p>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
            <strong>Original Launch:</strong> {capsule ? formatLaunchDate(capsule?.original_launch) : 'N/A'}
          </p>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
            <strong>Landings:</strong> {capsule?.landings || 'N/A'}
          </p>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
            <strong>Type:</strong> {capsule?.type || 'N/A'}
          </p>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
            <strong>Details:</strong> {capsule?.details || 'Details are not available'}
          </p>
        </Card> : 
        <p>Loading ...</p>
         }
      </main>
    </div>
  );
};
