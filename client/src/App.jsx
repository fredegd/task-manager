import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Landing from "./components/Landing"
import Tasks from "./components/Tasks"
import CreateTask from "./components/CreateTask"
import "./App.css";

function App() {
  return (
    <>
        <nav>
     <NavLink to="/tasks">tasks </NavLink>
     <NavLink to="/tasks/create">create task</NavLink>
     </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/create" element={<CreateTask />} />
      </Routes>
    </>
  );
}

export default App;
