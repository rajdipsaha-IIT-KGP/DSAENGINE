import { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Menu from './Components/Menu';
import User from './Components/User';

import About from './Pages/About';
import Practice from './Pages/Practice';
import Roadmap from './Pages/Roadmap';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Logout from './Pages/Logout';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const menuRef = useRef(null);
  const userRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleUserToggle = () => {
    setIsUserOpen(!isUserOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (userRef.current && !userRef.current.contains(event.target)) {
        setIsUserOpen(false);
      }
    }

    if (isMenuOpen || isUserOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, isUserOpen]);

  return (
    <div className="app-container">
      {/* Menu Button */}
      <button className="menu-button" onClick={handleMenuToggle}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>

      {/* User Button */}
      <button className="user-button" onClick={handleUserToggle}>
        <FontAwesomeIcon icon={faUser} size="2x" />
      </button>

      <div className="glow-circle"></div>

      {/* Panels */}
      {isMenuOpen && <div><Menu ref={menuRef} /></div>}
      {isUserOpen && <div><User ref={userRef} /></div>}

      {/* All Routes in One Place */}
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>DSA Engine</h1>
                <h3>Your all-in-one platform for mastering Data Structures and Algorithms</h3>
                <div className="buttons">
                  <button className="btn-primary">Get Started</button>
                  <button className="btn-secondary">Learn More</button>
                </div>
              </>
            }
          />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<h2 style={{ textAlign: 'center', color: 'red' }}>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
