import './Startpage.css'; 
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

function Startpage() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const [handleName, setHandleName] = useState('');
  const navigate = useNavigate();

  async function handleConnectCodeforces() {
    if (!handleName) {
      toast.error("Please enter your Codeforces handle name");
      return;
    }

    try {
      const res = await fetch(`https://codeforces.com/api/user.info?handles=${handleName}`);
      const data = await res.json();
      if (data.status === "OK") {
        toast.success(`Connected to Codeforces profile: ${data.result[0].handle}`);
      } else {
        toast.error("Failed to connect to Codeforces profile. Please check your handle name.");
      }
    } catch (error) {
      console.error("Error connecting to Codeforces:", error);
      toast.error("An error occurred while connecting to Codeforces");
    }
  }

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
          <input type="text" placeholder="Type your handle name" />
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
          <input
            type="text"
            placeholder="Type your handle name"
            value={handleName}
            onChange={(event) => setHandleName(event.target.value)}
          />
          <button className="card-button" onClick={handleConnectCodeforces}>
            Connect Your Profile In Codeforces
          </button>
        </div>
      </div>

      {/* ✅ Button Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
        <button className="dsa" onClick={() => navigate('/Practice')}>
          Start Learning And Practicing DSA
          <span className="arrow">→</span>
        </button>

        <button
          className="dsa"
          onClick={() => {
            if (!handleName) {
              toast.error("Please enter your Codeforces handle name");
              return;
            }
            // ✅ Pass handleName as state to next page
          navigate(`/CodeforcesProblems?handle=${handleName}`);


          }}
        >
          Browse Problems From Codeforces
          <span className="arrow">→</span>
        </button>
      </div>

      <ToastContainer position="top-center" />
    </div>
  );
}

export default Startpage;
