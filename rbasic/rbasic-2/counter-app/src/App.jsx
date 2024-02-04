import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButtom count={count} setCount={setCount} />
      <br></br>
      <br></br>

      <div>The current Count it {count}</div>
    </div>
  );
}
//Here this is a component
function CustomButtom(props) {
  function incr() {
    props.setCount(props.count + 1);
    console.log(props.count);
  }

  return <button onClick={incr}>Counter {props.count}</button>;
}

export default App;
