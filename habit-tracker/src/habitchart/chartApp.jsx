import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './homepage';
import HabitChart from './habitChart'
import  Habitform  from './habitform';
import Menu from './menu';
import Habits from './habits';

export default function ChartApp() {
  return (
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/habitform" element={<Habitform/>}/>
          <Route path="/habits" element={<Habits/>}/>
          <Route path="/habit-chart" element={<HabitChart />} />
        </Routes>
      </Router>
  );
}
