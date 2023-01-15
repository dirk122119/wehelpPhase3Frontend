import * as React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../page/home";
import {TodoList} from "../page/todolist"

function Approuter() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<TodoList/>}>
            <Route path="about" element={<div>about</div>} />
            <Route path="dashboard" element={<div>dashboard</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export { Approuter };
