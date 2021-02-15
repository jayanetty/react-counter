import React from "react";
// import AddNewCounter from "./components/addNew";
// import NewCounter from "./components/newCounter";
import Counter from "./components/counter";

class App extends React.Component {
  

  render() {
    
    return (
      <div className="App">
        <header>
          <h1>Counter App</h1>
        </header>
        {/* <AddNewCounter /> */}
        <Counter />
      </div>
    );
  }
}

export default App;
