import { useState, useEffect } from 'react';
import axios from 'axios';
import './CodeforcesProblems.css';

function CodeforcesProblems() {
  const [problems, setProblems] = useState([]);
  const [handle, setHandle] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const cfHandle = queryParams.get('handle');
    setHandle(cfHandle);

    if (cfHandle) {
      setLoading(true);
      axios
        .get(`http://localhost:3000/api/codeforces/userdata/${cfHandle}`)
        .then((res) => {
          setProblems(res.data.problems);
        })
        .catch((err) => {
          console.error("Error fetching problems", err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  const filteredProblems = problems.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="cf-container">
      <h1 className="cf-title">Codeforces Problems</h1>

      {/* Difficulty card section */}
      <div className="cf-info-card">
        <h3>Note:</h3>
        <p>Problems are categorized by difficulty based on their rating points:</p>
        <div className="cf-difficulty-tags">
          <span className="tag beginner">Beginner : 800 - 1000</span>
          <span className="tag easy">Easy : 1100 - 1300</span>
          <span className="tag lowermid">Lower-Mid : 1400 - 1600</span>
          <span className="tag mid">Mid-Level : 1700 - 1900</span>
          <span className="tag uppermid">Upper-Mid : 2000 - 2200</span>
          <span className="tag hard">Hard : 2300 - 2500</span>
          <span className="tag veryhard">Very Hard : 2600+</span>
        </div>
        <p className="cf-note-small">
          Recent problems will appear after they are rated. <br />
          Note: Problems with no tags are automatically filtered out.
        </p>
      </div>

      {/* Search Filter */}
      <div className="cf-filters">
        <input
          type="text"
          placeholder="Search problems..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="cf-search"
        />
      </div>

      {/* Loading or Table */}
      {loading ? (
        <div className="cf-loading">Loading...</div>
      ) : (
        <table className="cf-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Status</th>
              <th>Difficulty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProblems.map((problem, index) => (
              <tr
                key={index}
                className={problem.solved ? 'cf-row-attempted' : 'cf-row'}
              >
                <td>{index + 1}</td>
                <td>{problem.name}</td>
                <td>{problem.solved ? '✅ Attempted' : '❌ Not Attempted'}</td>
                <td>{problem.rating || 'Unrated'}</td>
                <td>
                 <a
  href={`https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`}
  target="_blank"
  rel="noopener noreferrer"
>
  Open ↗
</a>



                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CodeforcesProblems;
