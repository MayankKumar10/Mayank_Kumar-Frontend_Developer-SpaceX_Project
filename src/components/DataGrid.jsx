import React from 'react';
import { CardContainer } from './CardContainer';

export const DataGrid = ({ props, type }) => {
  const isRocket = type === 'rockets';

  // Determine the number of columns based on the type
  const gridColumnClass = isRocket
    ? 'sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'
    : 'sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3';

  return (
    <div className={`data-grid grid mt-6 ${gridColumnClass} gap-6 justify-center content-center place-items-center`}>
      <CardContainer props={props} type={type} />
    </div>
  );
};
