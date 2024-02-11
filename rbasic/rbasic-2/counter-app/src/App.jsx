import { useState } from "react";

function App() {
  const [todos, setToDo] = useState([
    {
      Title: "Tod1",
      Desc: "alksdfjh",
    },
    {
      Title: "Tod2",
      Desc: "alksdfjh",
    },
    {
      Title: "Tod3",
      Desc: "alksdfjh",
    },
  ]);

  function addNewTo() {
    setToDo([
      ...todos,
      {
        Title: "New this",
        Desc: "New Desc",
      },
    ]);
  }

  return (
    <div>
      <button onClick={addNewTo}>Add New ToDO</button>

      {todos.map(function (todo) {
        return <Todo Title={todo.Title} Desc={todo.Desc}></Todo>;
      })}
    </div>
  );
}
//Here this is a component
function Todo(props) {
  return (
    <div>
      <h1>{props.Title}</h1>
      <h2>{props.Desc}</h2>
    </div>
  );
}

export default App;
