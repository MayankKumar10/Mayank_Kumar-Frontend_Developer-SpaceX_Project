// src/components/CardContainer.jsx
import React from 'react';
import { Badge, Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

export const CardContainer = ({ props, type }) => {
  const isRocket = type === 'rockets';

  const truncateDescription = (description, maxLines) => {
    if (description === null) {
      description = 'Detail is not available';
    }
    const lines = description ? description.split('\n') : [];
    const truncatedLines = lines.slice(0, isRocket ? 20 : 10);
    return truncatedLines.join('\n');
  };

  return (
    <>
      {props?.map((item) => (
        <Link
          key={item.id ? item.id : item.capsule_serial}
          to={isRocket ? `/rockets/${item.rocket_id}` : `/capsules/${item.capsule_serial}`}
        >
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={item.id ? item?.flickr_images[0] : ''}
          >
            <div className="flex flex-row justify-between items-center flex-wrap gap-2">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {isRocket ? item.rocket_name : `${item.capsule_id.charAt(0).toUpperCase() + item.capsule_id.slice(1)} (${item?.capsule_serial})`}
              </h5>

              <Badge
                color={`${isRocket ? (item.active ? 'green' : 'red') : item.status === 'active' ? 'green' : item.status === 'unknown' ? 'warning' : item.status === 'retired' ? 'red' : 'indigo'}`}
                size="sm"
              >
                {isRocket ? (item.active ? 'Active' : 'Not Active') : item.status}
              </Badge>
            </div>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              {truncateDescription(item.description || item.details, isRocket ? 20 : 10)}
            </p>
          </Card>
        </Link>
      ))}
    </>
  );
};
