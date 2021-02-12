import React from "react";
import AddNewCounter from "./components/addNew";
// import NewCounter from "./components/newCounter";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Counter App</h1>
        </header>
        <AddNewCounter />
      </div>
    );
  }
}

export default App;
