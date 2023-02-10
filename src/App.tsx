import React from "react";
import "./App.css";
import Chart2 from "./component/Chart2";
import Chart1 from "./component/Chart1";

function App() {
  return (
    <div className="App">
      <h1>Manufac Analytics Assignment</h1>
      <div className="container">
        <Chart1 />
        <Chart2 />
      </div>
    </div>
  );
}

export default App;
