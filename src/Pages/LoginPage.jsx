import React from 'react';
import Header from '../components/Header1/index.jsx';
import LoginDiv from '../components/LoginDiv/index.jsx';
import '../Styles/LoginPage.css';

export default function LoginPage() {

  localStorage.removeItem('userName');
  localStorage.removeItem('userCommercial');

  return (
    <div className='AppContainer'>
      <Header />
      <div className="bodyContainer">
        <LoginDiv />
      </div>
    </div>
  );
}