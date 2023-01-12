import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import {CheckBoxList} from "./CheckboxList"

function InputText() {
  const [todolist, setTodolist] = React.useState([]);
  const [input, setInput] = React.useState(0);

  React.useEffect(() => {
    // action on update of movies
}, [todolist]);

  function handleDeleteBtn(todolist){
    alert("input")
    console.log(todolist)
    setTodolist([...todolist])
    alert("finish")
  }

  function AddTodo(todo){
    setTodolist([...todolist, todo]);
  }
  
  return (
    <div>
      <Paper
        elevation={2}
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Add TodoList"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={() => {AddTodo(input)}}
        >
          <AddIcon />
        </IconButton>
      </Paper>
      <CheckBoxList todos={todolist} handleDeleteBtn={handleDeleteBtn}/>
    </div>
  );
}

export { InputText };
