import { useState, useEffect } from 'react';
import axios from 'axios';
import './CodeforcesProblems.css';
import Select from 'react-select';
function CodeforcesProblems() {
  const [problems, setProblems] = useState([]);
  const [handle, setHandle] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [currpage, setcurrPage] = useState(1);
  const [difficulty, setDifficulty] = useState('');
  const [tags, settags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [solved, setSolved] = useState('');
  const problemsPerPage = 60;
  const maxPageButtons = 5;

  useEffect(() => {
  const fetchData = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const cfHandle = queryParams.get('handle');
    setHandle(cfHandle);

    if (cfHandle) {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:3000/api/codeforces/userdata/${cfHandle}`);
        setProblems(res.data.problems);
        const allTags = [...new Set(res.data.problems.flatMap(p => p.tags || []))];
        settags(allTags);
      } catch (err) {
        console.error("Error fetching problems", err);
      } finally {
        setLoading(false);
      }
    }
  };

  fetchData();
}, []);


  const filteredProblems = problems.filter((p) => {
    const matchedSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const rating = p.rating || 0;
    let matchedSolved = true;
    if (solved === 'solved') matchedSolved = p.solved;
    else if (solved === 'unsolved') matchedSolved = !p.solved;
    let matchedDifficulty = true;
    if (difficulty === 'Beginner') matchedDifficulty = rating >= 800 && rating <= 1000;
    else if (difficulty === 'Easy') matchedDifficulty = rating >= 1100 && rating <= 1300;
    else if (difficulty === 'Lower-Mid') matchedDifficulty = rating >= 1400 && rating <= 1600;
    else if (difficulty === 'Mid-Level') matchedDifficulty = rating >= 1700 && rating <= 1900;
    else if (difficulty === 'Upper-Mid') matchedDifficulty = rating >= 2000 && rating <= 2200;
    else if (difficulty === 'Hard') matchedDifficulty = rating >= 2300 && rating <= 2500;
    else if (difficulty === 'Very Hard') matchedDifficulty = rating >= 2600;

    const matchedTags =
      selectedTags.length === 0 ||
      selectedTags.some(tag => (p.tags || []).includes(tag));

    return matchedSearch && matchedDifficulty && matchedTags && matchedSolved;
  });

  const indexOfLastProblem = currpage * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const newProblems = filteredProblems.slice(indexOfFirstProblem, indexOfLastProblem);
  const totalPages = Math.ceil(filteredProblems.length / problemsPerPage);

  let Startpage = Math.max(1, currpage - Math.floor(maxPageButtons / 2));
  let Endpage = Startpage + maxPageButtons - 1;
  if (Endpage > totalPages) {
    Endpage = totalPages;
    Startpage = Math.max(1, Endpage - maxPageButtons + 1);
  }

  const paginationButtons = [];
  for (let i = Startpage; i <= Endpage; i++) {
    paginationButtons.push(
      <button
        key={i}
        className={`cf-pagination-button ${currpage === i ? 'active' : ''}`}
        onClick={() => setcurrPage(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="cf-container">
      <h1 className="cf-title">Codeforces Problems</h1>

      {/* Difficulty Explanation */}
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
      </div>

      {/* Filters */}
      <div className="cf-filters">
        <input
          type="text"
          placeholder="Search problems..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="cf-search"
        />
       <select
          className="cf-dropdown" id="cf-dropdown cf-solved-dropdown" value = {solved}
          onChange={(e) => setSolved(e.target.value)}>
          <option value="">All Problems</option>
          <option value="solved">Solved Problems</option>
          <option value="unsolved">Unsolved Problems</option>
          </select>
        <select
          className="cf-dropdown" id="cf-difficulty-dropdown"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="">All Difficulties</option>
          <option value="Beginner">Beginner : 800 - 1000</option>
          <option value="Easy">Easy : 1100 - 1300</option>
          <option value="Lower-Mid">Lower-Mid : 1400 - 1600</option>
          <option value="Mid-Level">Mid-Level : 1700 - 1900</option>
          <option value="Upper-Mid">Upper-Mid : 2000 - 2200</option>
          <option value="Hard">Hard : 2300 - 2500</option>
          <option value="Very Hard">Very Hard : 2600+</option>
        </select>

   <Select
  isMulti
  name="tags"
  options={tags.map(tag => ({ value: tag, label: tag }))}
  className="cf-tag-select"
  classNamePrefix="select"
  value={tags
    .filter(tag => selectedTags.includes(tag))
    .map(tag => ({ value: tag, label: tag }))}
  onChange={(selectedOptions) =>
    setSelectedTags(selectedOptions.map(option => option.value))
  }
/>

      </div>

      {/* Table */}
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
            {newProblems.map((problem, index) => (
              <tr
                key={index}
                className={problem.solved ? 'cf-row-attempted' : 'cf-row'}
              >
                <td>{indexOfFirstProblem + index + 1}</td>
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

      {/* Pagination */}
      <div className="cf-pagination">
        <button className='cf-pagination-button' onClick={() => setcurrPage(1)} disabled={currpage === 1}>
          First
        </button>
        <button className='cf-pagination-button' onClick={() => setcurrPage(prev => Math.max(1, prev - 1))} disabled={currpage === 1}>
          Previous
        </button>

        {paginationButtons}

        <button className='cf-pagination-button' onClick={() => setcurrPage(prev => Math.min(totalPages, prev + 1))} disabled={currpage === totalPages}>
          Next
        </button>
        <button className='cf-pagination-button' onClick={() => setcurrPage(totalPages)} disabled={currpage === totalPages}>
          Last
        </button>
      </div>
    </div>
  );
}

export default CodeforcesProblems;
