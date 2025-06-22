import { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import Menu from './Components/Menu';
import User from './Components/User';
import About from './Pages/About';
import Practice from './Pages/Practice';
import Roadmap from './Pages/Roadmap';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Logout from './Pages/Logout';
import Startpage from './Components/Startpage';
import LoadingBar from 'react-top-loading-bar';
import CodeforcesStatus from './Pages/CodeforcesStatus';
import CodeforcesProblems from './Pages/CodeforcesProblems';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const menuRef = useRef(null);
  const userRef = useRef(null);

  const loadingBarRef = useRef(null);
  const location = useLocation(); // Detect route changes

  useEffect(() => {
    // Start and complete the loading bar on route change
    loadingBarRef.current?.continuousStart();
    const timer = setTimeout(() => {
      loadingBarRef.current?.complete();
    }, 400);

    return () => clearTimeout(timer);
  }, [location]);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleUserToggle = () => setIsUserOpen(!isUserOpen);

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
      {/* Top Loader */}
      <LoadingBar color="#3b82f6" ref={loadingBarRef} height={3} />

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

      {/* Routes */}
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>DSA Engine</h1>
                <h3>Your all-in-one platform for mastering Data Structures and Algorithms</h3>
                <div className="buttons">
                  <Link to="/getstarted"><button className="btn-primary">Get Started</button></Link>
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
          <Route path="/getstarted" element={<Startpage />} />
          <Route path="/codeforces/:handle" element={<CodeforcesStatus />} />
          <Route path="/codeforcesproblems" element={<CodeforcesProblems />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
