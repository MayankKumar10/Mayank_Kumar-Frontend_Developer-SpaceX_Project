import { DarkThemeToggle } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  let LinkArray = [
    {id:1, path:'/', name:'Home Page'},
    {id:2, path:'/rockets', name:'Rockets'},
    {id:3, path:'/capsules', name:'Capsules'}
  ];

  return (
    <header className="flex flex-wrap items-center justify-between p-4 border-b-2 border-gray-300 bg-white text-sm dark:bg-gray-800">
      <Link className="text-xl font-semibold dark:text-white" to="/">SpaceX</Link>
      <nav className="flex flex-wrap items-center gap-5 mt-4 sm:mt-0">
        {LinkArray.map((link) => (
          <Link
            to={link.path}
            className="font-medium text-blue-500 dark:text-white hover:text-blue-700 dark:hover:text-gray-300"
            aria-current={link.path}
            key={link.id}
          >
            {link.name}
          </Link>
        ))}
        <DarkThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
