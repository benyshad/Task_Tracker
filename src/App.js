import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";


function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appiontment",
      day: "Feb 5th at 2:30",
      reminder: true,
    },
    {
      id: 2,
      text: "Car Sale",
      day: "Jan 11th at 10:30",
      reminder: true,
    },
    {
      id: 3,
      text: "Interview",
      day: "Sep 8th at 5:30",
      reminder: false,
    },
    {
      id: 4,
      text: "Black Friday Sale",
      day: "Nov 9th at 7:30",
      reminder: false,
    },
    {
      id: 5,
      text: "Board Exam",
      day: "Apr 4th at 6:30",
      reminder: true,
    },
  ]);

  //Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  setTasks([...tasks, {id, ...task}])
}

  // Delete Task
const  deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  //Toggle Reminder
const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  } 



  return (
    <div className="container">
    <Header title='Task Tracker' />
    <AddTask onAdd={addTask} />
    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />

    </div>
  );
}

export default App;
