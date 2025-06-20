// Menu.js
import './Menu.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Menu = React.forwardRef((props, ref) => {
  return (
    <div className="menu-overlay">
      <div className="menu-panel" ref={ref}>
        <ul className="menu-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/roadmap">Roadmap</Link></li>
          <li><Link to="/practice">Practice</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </div>
  );
});

export default Menu;
