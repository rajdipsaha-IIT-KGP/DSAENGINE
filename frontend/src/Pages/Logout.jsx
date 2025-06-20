import './Logout.css';
import { ToastContainer, toast } from 'react-toastify';
function Logout() {
  const handleLogout = () => {
   if(!check()) 
    return
   toast.success("You have successfully logged out 🎉");
    localStorage.removeItem('token');
    localStorage.removeItem('user');

  };
function  check() {
    if (!localStorage.getItem('token')) {
      toast.error("You are not logged in");
      return false;
    }
    else return true;
  }
  return (
    
    <div className="logout-container">
      <h2 className="logout-title">Are you sure you want to logout?</h2>
   
      <button className="logout-button" onClick={handleLogout}>Confirm Logout</button>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default Logout;
