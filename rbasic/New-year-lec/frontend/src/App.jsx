import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo.jsx";
import { Todos } from "./components/Todos.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3000/todos");
        const json = await res.json();
        setTodos(json.todos);
      } catch (error) {
        console.error("Error aa gaya bhayi", error);
      }
    }
    fetchData();
  }, [todos]);

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}
export default App;
