import * as React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../page/home";
import {TodoList} from "../page/todolist"

function Approuter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:(<Home />),
    },
    {
      path: "list",
      element:(<TodoList/>),
    }
  ])
  // return (
  //   <React.StrictMode> 
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="" element={<Home />} />
  //         <Route path="todolist" element={<TodoList/>} />
  //       </Routes>
  //     </BrowserRouter>
  //     </React.StrictMode>
      
  // );
  return(<RouterProvider router={router} />)
}

export { Approuter };
