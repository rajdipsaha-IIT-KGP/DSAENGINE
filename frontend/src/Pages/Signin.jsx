import './Signup.css';
function Signin(){
    
         return (
    <div className="signup-container">
      <form className="signup-form">
        <h1>Login To DSA Engine</h1>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>

        <button type="submit">Sign In</button>
      </form>
    </div>)
}
export default Signin;