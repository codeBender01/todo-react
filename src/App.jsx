import { useState } from "react";
import "./globalStyles/colors.scss";
import TodoCard from "./components/TodoCard/TodoCard";

function App() {
  return (
    <div className="App">
      <TodoCard />
    </div>
  );
}

export default App;
