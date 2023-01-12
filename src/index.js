import React from 'react';
import ReactDOM from 'react-dom';
import "./static/css/body.css"
import {MyNavbar} from "./static/js/component/MyNavbar"
import {ButtonForTodolist} from "./static/js/component/ButtonForTodolist"
import {Approuter} from "./static/js/component/Approuter"

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
root.render(<Approuter/>)
// root.render(
//     <div>
//     <MyNavbar/>
//     <ButtonForTodolist/>
//     </div>
// )