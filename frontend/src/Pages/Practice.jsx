import './Practice.css';
import { useNavigate } from 'react-router-dom';

function Practice() {
  const navigate = useNavigate();

  return (
    <div className="practice-container">
      <h1 className="practice-title">Practice Page</h1>

      <div className="practice-grid">

        <div className="topic-card">
          <h3>Arrays</h3>
          <div className="topic-buttons">
            <a href="https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB" target="_blank">
  <button>Learn</button>
</a>
     
            <button onClick={() => navigate('/practice/arrays')}>Practice</button>
          </div>
        </div>

        <div className="topic-card">
          <h3>Strings</h3>
          <div className="topic-buttons">
            <a href="https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB" target="_blank">
  <button>Learn</button></a>
            <button onClick={() => navigate('/practice/strings')}>Practice</button>
          </div>
        </div>

        <div className="topic-card">
          <h3>Linked List</h3>
          <div className="topic-buttons">
           <a href="https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB" target="_blank">
  <button>Learn</button></a>
            <button onClick={() => navigate('/practice/linked-list')}>Practice</button>
          </div>
        </div>

        <div className="topic-card">
          <h3>Stack</h3>
          <div className="topic-buttons">
          <a href="https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB" target="_blank">
  <button>Learn</button></a>
            <button onClick={() => navigate('/practice/stack')}>Practice</button>
          </div>
        </div>

        <div className="topic-card">
          <h3>Queue</h3>
          <div className="topic-buttons">
            <a href="https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB" target="_blank">
  <button>Learn</button></a>
            <button onClick={() => navigate('/practice/queue')}>Practice</button>
          </div>
        </div>

        <div className="topic-card">
          <h3>Hashing</h3>
          <div className="topic-buttons">
           <a href="https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB" target="_blank">
  <button>Learn</button></a>
            <button onClick={() => navigate('/practice/hashing')}>Practice</button>
          </div>
        </div>

        <div className="topic-card">
          <h3>Recursion</h3>
          <div className="topic-buttons">
           <a href="https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB" target="_blank">
  <button>Learn</button></a>
            <button onClick={() => navigate('/practice/recursion')}>Practice</button>
          </div>
        </div>

        <div className="topic-card">
          <h3>Sorting</h3>
          <div className="topic-buttons">
            <a href="https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB" target="_blank">
  <button>Learn</button></a>
            <button onClick={() => navigate('/practice/sorting')}>Practice</button>
          </div>
        </div>

        <div className="topic-card">
          <h3>Searching</h3>
          <div className="topic-buttons">
            <a href="https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB" target="_blank">
  <button>Learn</button></a>
            <button onClick={() => navigate('/practice/searching')}>Practice</button>
          </div>
        </div>

        <div className="topic-card">
          <h3>Binary Trees</h3>
          <div className="topic-buttons">
         <a href="https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB" target="_blank">
  <button>Learn</button></a>
            <button onClick={() => navigate('/practice/binary-trees')}>Practice</button>
          </div>
        </div>

        <div className="topic-card">
          <h3>Graphs</h3>
          <div className="topic-buttons">
            <a href="https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB" target="_blank">
  <button>Learn</button></a>
            <button onClick={() => navigate('/practice/graphs')}>Practice</button>
          </div>
        </div>

        <div className="topic-card">
          <h3>Dynamic Programming</h3>
          <div className="topic-buttons">
            <a href="https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB" target="_blank">
  <button>Learn</button></a>
            <button onClick={() => navigate('/practice/dynamic-programming')}>Practice</button>
          </div>
        </div>

        <div className="topic-card">
          <h3>Greedy</h3>
          <div className="topic-buttons">
          <a href="https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB" target="_blank">
  <button>Learn</button></a>
            <button onClick={() => navigate('/practice/greedy')}>Practice</button>
          </div>
        </div>

        <div className="topic-card">
          <h3>Backtracking</h3>
          <div className="topic-buttons">
            <a href="https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB" target="_blank">
  <button>Learn</button></a>
            <button onClick={() => navigate('/practice/backtracking')}>Practice</button>
          </div>
        </div>

        <div className="topic-card">
          <h3>Bit Manipulation</h3>
          <div className="topic-buttons">
            <a href="https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB" target="_blank">
  <button>Learn</button></a>
            <button onClick={() => navigate('/practice/bit-manipulation')}>Practice</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Practice;
