import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addvalue = () => {
    setCounter((counter += 1));
  };
  const removevalue = () => {
    setCounter((counter -= 1));
  };

  return (
    <>
      <div className="heading">Count: {counter}</div>
      <button className="add" onClick={addvalue}>
        Add value
      </button>
      <button className="remove" onClick={removevalue}>
        Remove value
      </button>
    </>
  );
}

export default App;
