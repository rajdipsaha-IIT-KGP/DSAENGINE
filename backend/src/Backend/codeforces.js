const express = require('express');
const axios = require('axios');
const router = express.Router();
router.get('/userdata/:handle',async function(req, res) {
    const handle = req.params.handle;
    try{
        const submissionsResponse = await axios.get(`https://codeforces.com/api/user.status?handle=${handle}`);
        // i created a set to store solved problems
        const solvedSet = new Set();
        submissionsResponse.data.result.forEach((submisson)=>{
            if(submisson.verdict === "OK") {
             const problemId = `${submisson.problem.contestId}-${submisson.problem.index}`;
                 solvedSet.add(problemId);

            }
        })
   // now i am fetching all problems from codeforces api
   const problemsResponse = await axios.get('https://codeforces.com/api/problemset.problems');
   const Allproblems = problemsResponse.data.result.problems;
   // now i am showing which is solvedby user which are not 
   const problemsWithStatus = Allproblems.map(problem => {
    const id = `${problem.contestId}-${problem.index}`;
     return {
        id,
        name: problem.name,
        rating: problem.rating || 0,
        tags: problem.tags || [],
        status: solvedSet.has(id) ? "Attempted" : "Not Attempted",
        link: `https://codeforces.com/contest/${problem.contestId}/problem/${problem.index}`
      };
   })
   return res.json({
    problems: problemsWithStatus,
    message: "User data fetched successfully"
   })
    }
    catch (error) {
        console.error("Error fetching user data:", error);
        return res.status(500).json({ message: "Error fetching user data" });
    }
})
module.exports = router;