import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";


export default function Tasks() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000`
      )
      .then((response) => {
        setTasks(response.data);
        console.log(tasks)
      })
      .catch((err) => console.error(err, "URL not found"));
  }, []);


  return (
    <div>
      <h1>Task List</h1>
      {tasks.map((task)=>{
        return(
          <div className="taskCard">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>priority: {task.priority}</p>
            <p>status: {task.status}</p>
          </div>
        )
      })}
    </div>
  )
}
