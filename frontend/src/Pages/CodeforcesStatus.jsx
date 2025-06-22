import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function CodeforcesStatus() {
 const { handle } = useParams();
console.log("Codeforces handle from URL:", handle);

  const [problems, setProblems] = useState([]);
const [loading, setLoading] = useState(true);
 useEffect(()=>{
    async function fetchProblems() {
      try {
        const response = await axios.get(`http://localhost:3000/api/codeforces/userdata/${handle}`);
;
        setProblems(response.data.problems);
        console.log("Fetched problems:", response.data.problems);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching problems:", error);
        setLoading(false);
      }
    }
    fetchProblems();
 },[handle])
  return (
    <div>
      <h1>Codeforces Status Page</h1>
    </div>
  );
}

export default CodeforcesStatus;
