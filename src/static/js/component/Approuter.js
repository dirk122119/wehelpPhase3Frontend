import * as React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app";
import { Home } from "../page/home";
import {TodoList} from "../page/todolist"

function Approuter() {
  return (
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<TodoList/>}>
            <Route path="about" element={<div>about</div>} />
            <Route path="dashboard" element={<div>dashboard</div>} />
          </Route>
        </Routes>
      </HashRouter>
    </React.StrictMode>
  );
}

export { Approuter };
