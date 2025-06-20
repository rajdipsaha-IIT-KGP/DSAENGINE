import { ToastContainer, toast } from 'react-toastify';
import React, { useState } from "react";
import './Signup.css';
import axios from 'axios'
 function Signin(){
  async function handleSignin(e) {
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:3000/signin', {
      username,
      email,
      password,})
      if(response.data.message === "User signed in successfully") {
        toast.success("User signed in successfully 🎉");
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setUsername('');
        setEmail('');
        setPassword('');

      }
      else {
        toast.error("Error signing in");
      }
  }
    catch (error) {
      console.error("Error during signin:", error);
      toast.error("An error occurred during signin");
    }
}
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
         return (
    <div className="signup-container">
      <form className="signup-form">
        <h1>Login To DSA Engine</h1>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required value={username}
          onChange={(e)=>{
            setUsername(e.target.value);
          }}/>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value = {password}required
          onChange={(e)=>{
            setPassword(e.target.value);
          }} />
        </div>

        <button type="submit"onClick={handleSignin}>Sign In</button>
      </form>
      <ToastContainer position="top-center" />
    </div>)
}
export default Signin;