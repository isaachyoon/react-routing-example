import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom'


function HomePage(props) {
  return (
    <div className="home-page">
      <Link to={`/employees`} className="home-button">Employees</Link>
      <Link to={`/benefits`} className="home-button">Benefits And Pay</Link>
      <Link to={`/settings`} className="home-button">Settings</Link>      
    </div>
  );
}
export default HomePage;
