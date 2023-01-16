import * as React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../page/home";
import {TodoList} from "../page/todolist"

function Approuter() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<TodoList/>}>
          </Route>
        </Routes>
      </BrowserRouter>
      </StrictMode>
  );
}

export { Approuter };
