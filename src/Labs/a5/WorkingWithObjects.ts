import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });
      const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"
      const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
      };
      const updateTitle = async () => {
        const response = await axios
          .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
      };
      useEffect(() => {
        fetchAssignment();
      }, []);
    
  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties</h3>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <button onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} >
        Fetch Assignment
      </button>
      <h4>Retrieving Objects</h4>
      <a href="http://localhost:4000/a5/assignment">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a href="http://localhost:4000/a5/assignment/title">
        Get Title
      </a>
      <h4>Modifying Properties</h4>
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/>
        <h4>Adding Properties</h4>
        <a href="http://localhost:4000/a5/assignment/score">
            Get Score
        </a>
        <h3>Creating new Items in an Array</h3>
        <a href={`${API}/create`}>
          Create Todo
        </a>
        <h3>Deleting from an Array</h3>
        <a href={`${API}/${todo.id}/delete`}>
          Delete Todo with ID = {todo.id}
        </a>
    </div>
  );
}
export default WorkingWithObjects;