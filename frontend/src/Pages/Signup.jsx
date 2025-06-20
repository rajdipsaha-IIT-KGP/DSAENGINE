import './Signup.css';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // make sure this is imported!

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignUp(e) {
  e.preventDefault();

  // Basic validation
  if (!username || !email || !password) {
    toast.error("All fields are required");
    return;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long");
    return;
  }

  try {
    const response = await axios.post('http://localhost:3000/signup', {
      username: username,
      email: email,
      password: password,
    });

    if (response.data.message === "User created successfully") {
      toast.success("User created successfully 🎉");

 
      localStorage.setItem('token', response.data.token);

      
      localStorage.setItem('user', JSON.stringify(response.data.user));

      setUsername('');
      setEmail('');
      setPassword('');
    } else {
      toast.error("Error creating user");
    }
  } catch (error) {
    console.error("Error during signup:", error);
    toast.error("An error occurred during signup");
  }
}

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignUp}>
        <h1>Sign Up</h1>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Sign Up</button>

        {/* Divider */}
        <div className="divider">
          <span>OR</span>
        </div>

        {/* Google Button */}
        <button type="button" className="google-btn">
          <FontAwesomeIcon icon={faGoogle} className="google-icon" />
          Sign up with Google
        </button>
      </form>

      {/* Toast notifications */}
      <ToastContainer position="top-center" />
    </div>
  );
}

export default Signup;
