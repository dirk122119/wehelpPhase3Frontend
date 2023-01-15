import * as React from "react";
import {MyNavbar} from "../component/MyNavbar"
import {ButtonForTodolist} from "../component/ButtonForTodolist"
import {HomeImg} from "../component/HomeImg"

function Home(){
    return (<div>
        <MyNavbar/>
        <HomeImg/>
        <ButtonForTodolist/>
        </div>)
}
export{Home}