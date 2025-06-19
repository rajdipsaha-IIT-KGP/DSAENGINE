import './Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function Signup() {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h1>Sign Up</h1>

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
    </div>
  );
}

export default Signup;
