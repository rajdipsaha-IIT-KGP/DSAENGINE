import './Startpage.css'; // Import your CSS file for styling
function Startpage() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="start-container">
      <h1 className="start-title">Welcome to the World Of DSA</h1>

      {/* ✅ Section 1: Practice Platforms */}
      <div className="card-container">
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            alt="LeetCode"
            className="card-logo"
            onClick={() => openInNewTab("https://leetcode.com/")}
          />
          <p>Practice your coding skills on LeetCode.</p>
          <button className="card-button">Connect Your Profile In LeetCode</button>
        </div>

        <div className="card">
          <img
            src="https://img.icons8.com/?size=100&id=REjhvBBEfkho&format=png&color=f8f9fa"
            alt="Codeforces"
            className="card-logo"
            onClick={() => openInNewTab("https://codeforces.com/")}
          />
          <p>Challenge yourself with Codeforces problems.</p>
          <button className="card-button">Connect Your Profile In Codeforces</button>
        </div>
      </div>

      

    </div>
  );
}
export default Startpage;