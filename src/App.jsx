import { Outlet } from 'react-router-dom';
import Nav from './components/UI/Nav.jsx';
import React from 'react';

function App() {
  return (
    <>
    
      <Nav />
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
}

export default App;