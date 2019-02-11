import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome.js";

const App = () => {
  return (
    <div>
      <p>React here 123!</p>
      <Welcome/>
    </div>
  );
};
export default App;
ReactDOM.hydrate(<App />, document.getElementById("app"));