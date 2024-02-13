import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './style.css';

import Dashboard from 'views/pages/Dashboard/Dashboard';
import Title from 'views/components/Title/Title';

// TODO:
// - save values to localstorage

// - imrove stories
// - improve tests

// - update aliases (@pages, @components, @data etc)

// - A/B testing

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<><Title>About</Title></>} />
      </Routes>
    </BrowserRouter>
  );
}
