import React, { useState } from "react";
import "./App.css";

function App() {
  const [cells, setCells] = useState(["a", "b", "c"]);

  function changeCell(newValue, key) {
    setCells((prevCells) =>
      prevCells.map((cell, id) => {
        return id === key ? newValue : cell;
      })
    );
  }

  function addCell(idx) {
    setCells((prevCells) => [
      ...prevCells.slice(0, idx + 1),
      "_",
      ...prevCells.slice(idx + 1),
    ]);
  }

  return (
    <div className="App">
      <>
        <div className="squares">
          <ul className="list">
            {cells.map((cell, idx) => (
              <>
                <li key={idx} className="cell">
                  <input
                    className="input"
                    type="text"
                    value={cell}
                    onChange={(e) => changeCell(e.target.value, idx)}
                  ></input>
                  <span className="add" onClick={() => addCell(idx)}></span>
                </li>
              </>
            ))}
          </ul>
        </div>
        <h1 className="cellsString">{cells.toString()}</h1>
      </>
    </div>
  );
}

export default App;
