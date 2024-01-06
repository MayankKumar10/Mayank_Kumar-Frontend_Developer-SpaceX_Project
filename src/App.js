// src/App.jsx
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRocketData, setData } from './redux/spacexSlice';
import {Rockets} from './pages/Rockets';
import {Capsules} from './pages/Capsules';
import { HomePage } from './pages/HomePage';
import Header from './components/Header';
import  FooterSpacex  from './components/Footer';
import { Flowbite } from 'flowbite-react';
import { PageNotFound } from './pages/PageNotFound';
import { RockectsInfo } from './pages/RockectsInfo';
import { CapsuleInfo } from './pages/CapsuleInfo';

const customTheme = {
  button: {
    color: {
      primary: 'bg-red-500 hover:bg-red-600',
    },
  },
};

const App = () => {

  return (
    
      <div className="App w-full">
      <Flowbite theme={{ theme: customTheme }}>

      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/rockets/:rocketId" element={<RockectsInfo />} />
          
          <Route path="/capsules" element={<Capsules />} />
          <Route path="/capsules/:capsuleId" element={<CapsuleInfo />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <FooterSpacex />
        </Flowbite>
      </div>
  );
};

export default App;
