import "bootstrap/dist/css/bootstrap.min.css";
import Apptodo from "./Apptodo";
import Heading from "./heading";
import TodoItems from "./TodoItems";
import "./App.css";
import { useState, useRef, useReducer } from "react";
import Welcomemessage from "./Welcomemessage";
import TodoItemsContextProvider from "./store/todoitems-store";

function App() {
  
  
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <Heading />
        <Apptodo />
        <Welcomemessage />
        <TodoItems/>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
