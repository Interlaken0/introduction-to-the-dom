import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  // 1. STATE: This is our 'Source of Truth' (The Virtual DOM)
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // 2. REF: This is a direct link to a 'Real DOM' element
  const inputRef = useRef(null);

  // 3. EFFECT: Focus the input field on page load (KSB: User Interface efficiency)
  useEffect(() => {
    inputRef.current.focus(); 
  }, []);

  const addTask = () => {
    if (inputValue.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };

    // Declarative: We tell React the new state, it handles the DOM update
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="container">
      <h1>DOM vs React: Task Tracker</h1>
      
      <div className="input-group">
        <input 
          ref={inputRef} // Direct DOM connection
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul>
        {tasks.map(task => (
          <li 
            key={task.id} 
            onClick={() => toggleTask(task.id)}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App