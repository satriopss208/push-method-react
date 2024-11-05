import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './page/landingPage';
import LoginPage from './page/LoginPage';
import HomePage from './page/HomePage';
import MovieDetail from './page/MovieDetail';


const App = () => {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
      <Route element={<LoginPage/>} path="/login" />
      <Route element={<HomePage/>} path="/home" />
      <Route element={<MovieDetail/>} path="/movie/:movieId" />
    </Routes>
    
  );
}

export default App