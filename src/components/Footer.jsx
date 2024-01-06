import { Footer } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const FooterSpacex = () => {
  return (
    <Footer container>
    <div className="container mx-auto flex flex-col items-center border-t border-gray-600 pt-4">
      <p className="text-lg font-bold mb-2 text-sm text-gray-700 dark:text-gray-400">Explore the Cosmos with SpaceX</p>
      <div className="flex flex-row gap-4">
        <Link to="/" className="hover:text-gray-400 transition duration-300">
          Home
        </Link>
        <Link to="/rockets" className="hover:text-gray-400 transition duration-300">
          Rockets
        </Link>
        <Link to="/capsules" className="hover:text-gray-400 transition duration-300">
          Capsules
        </Link>
        <Link to="/about" className="hover:text-gray-400 transition duration-300">
          About Us
        </Link>
      </div>
      <div className="mt-4 text-gray-700 dark:text-gray-400">
        <p>&copy; 2023 SpaceX Explorer</p>
      </div>
    </div>
  </Footer>
  );
};

export default FooterSpacex;
