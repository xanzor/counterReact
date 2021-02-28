import React, { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0);

  function minus() {
    if(counter !== 0) {
      setCounter(counter - 1);
    } 
  }

  function clear() {
    setCounter(0);
  }

  function plus() {
    setCounter(counter + 1);
  }

  return(
    
    <div className="main">
      <div className="number">
        {counter}
      </div>
      <div className="buttons">
        <button className="minus" onClick={minus}>Minus</button>
        <button className="clear" onClick={clear}>Clear</button>
        <button className="plus" onClick={plus}>Plus</button>
      </div>
    </div>
  )
};

export default App;