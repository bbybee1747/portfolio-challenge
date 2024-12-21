import { Outlet } from 'react-router-dom';
import Nav from './components/UI/Nav.jsx';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <div className="container-fluid d-flex flex-column vh-100">
        <div className="row flex-grow-1">
          <div className="col-12">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;