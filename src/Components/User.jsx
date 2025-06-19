import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './User.css';

const User = forwardRef((props, ref) => {
  return (
    <div className="user-panel" ref={ref}>
      <Link to="/signin" className="user-link">Sign In</Link>
      <Link to="/signup" className="user-link">Sign Up</Link>
      <Link to="/logout" className="user-link">Log Out</Link>
    </div>
  );
});

export default User;
