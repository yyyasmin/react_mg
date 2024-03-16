import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CustomOrderForm from './components/CustomOrderForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/custom-order-form" element={<CustomOrderForm />} />
      {/* Other routes */}
    </Routes>
  );
}

export default App;
