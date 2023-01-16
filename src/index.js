import React from 'react';
import { createRoot } from "react-dom/client";
import "./static/css/body.css"

import {Approuter} from "./static/js/component/Approuter"

createRoot(document.getElementById("root")).render(
  <Approuter/>
);

