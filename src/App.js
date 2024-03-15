import React, { useState } from "react";
import InputField from "./components/InputField";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const FILTER_MAP = {
  All: (task) => true,
  Completed: (task) => task.status === 1,
  Incomplete: (task) => task.status === 0,
};

const filterKeys = Object.keys(FILTER_MAP);

function App() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS fundamentals", status: 1, deleted: false },
    {
      id: "task_2",
      title: "Code a Todo List level 2",
      status: 1,
      deleted: false,
    },
  ]);
  const [newTask, setNewTask] = useState("");
  const [filterKey, setFilterKey] = useState("All");

  function handleSubmit(e) {
    e.preventDefault();
    if (newTask) {
      const addedTask = {
        id: Date.now(),
        title: newTask,
        status: 0,
        deleted: false,
      };
      setTasks([...tasks, addedTask]);
    }
    setNewTask("");
  }

  function toggleStatus(id) {
    const toggledTasks = tasks.map((task) => {
      return id === task.id ? { ...task, status: 1 - task.status } : task;
    });
    setTasks([...toggledTasks]);
  }

  function deleteTask(id) {
    const newList = tasks.filter((task) => task.id !== id);

    setTasks((list) => [...newList]);
  }

  return (
    <div className="container">
      <Header />
      <TaskList
        tasks={tasks}
        filterMap={FILTER_MAP}
        filterKey={filterKey}
        filterKeys={filterKeys}
        handleFilter={(filter) => setFilterKey(filter)}
        toggleStatus={toggleStatus}
        deleteTask={deleteTask}
      />
      <InputField
        handleChange={(e) => setNewTask(e.target.value)}
        newTask={newTask}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
