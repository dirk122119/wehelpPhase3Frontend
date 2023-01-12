import * as React from "react";
import {MyNavbar} from "../component/MyNavbar"
import {ButtonForTodolist} from "../component/ButtonForTodolist"

function Home(){
    return (<div>
        <MyNavbar/>
        <ButtonForTodolist/>
        <CheckBoxList todos={[0,2,4,6]}/>
        </div>)
}
export{Home}