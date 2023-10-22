import React, { useState } from 'react';
import '../css/header.css';
import babel_logo from '../images/babel.png';
import SignIn from './SignInForm'; // Import the SignIn component
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'


function Heading() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [buttonText, setButtonText] = useState('Sign In');

  const toggleSignInForm = () => {
    setShowSignIn(!showSignIn);
  };

  const handleSignIn = () => {
    setIsAuthenticated(true);
    setShowSignIn(false); // Close the sign-in form after successful sign-in
    setButtonText('Log Out');
  };

  const handleSignOut = () => {
    axios
      .post('http://127.0.0.1:8000/api/logout')
      .then((response) => {
        console.log('Sign-out successful', response.data);
        setIsAuthenticated(false); // Update the isAuthenticated state to false on sign-out
        setButtonText('Sign In');
      })
      .catch((error) => {
        console.error('Sign-out error', error);
      });
  };

  return (
    <header>
      <div className="header">
        <img src={babel_logo} alt="babel logo" className="logo" />
      </div>
      {isAuthenticated ? (
        <button onClick={handleSignOut}>{buttonText}</button>
      ) : (
        <button className='btn btn-transparent fw-bold mb-3' onClick={toggleSignInForm}>تسجيل الدخول</button>
      )}

      {showSignIn && !isAuthenticated && <SignIn onClose={toggleSignInForm} onSignIn={handleSignIn} />}
    </header>
  );
}

export default Heading;
