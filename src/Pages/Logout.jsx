function Logout() {
    // This component handles the logout functionality
    // It can be expanded to include API calls or state management as needed
    
    const handleLogout = () => {
        // Logic for logging out the user, e.g., clearing tokens, redirecting, etc.
        console.log("User logged out");
        // Redirect to home or login page if necessary
    };
    
    return (
        <div className="logout-container">
        <h2>Logout</h2>
        <button onClick={handleLogout}>Confirm Logout</button>
        </div>
    );
}
export default Logout;