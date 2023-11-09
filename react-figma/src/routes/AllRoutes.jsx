import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import BlockCard from '../components/BlockCard';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<BlockCard/>} />
    </Routes>
  )
}

export default AllRoutes
