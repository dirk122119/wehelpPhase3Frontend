import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { CheckBoxList } from "./CheckboxList";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

function InputText() {
  const [todolist, setTodolist] = React.useState([]);
  const [input, setInput] = React.useState("");
  readFromFirebase;
  React.useEffect(() => {
    readFromFirebase();
  }, []);

  async function writeToFirebsae() {
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todo: input,
      });
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  async function readFromFirebase() {
    await getDocs(collection(db, "todos")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setTodolist(newData);
    });
  }
  async function deleteFromFibase(id) {
    await deleteDoc(doc(db, "todos", id));
  }

  function handleDeleteBtn(index) {
    deleteFromFibase(todolist[index].id);
    console.log(todolist[index].id);
    todolist.splice(index, 1);
    setTodolist([...todolist]);
  }

  function AddTodo(todo) {
    console.log("addd")
    setTodolist([...todolist, { todo: input, id: addId }]);
    const addId = writeToFirebsae();
    setInput("");
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
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={() => {
            AddTodo(input);
          }}
        >
          <AddIcon />
        </IconButton>
      </Paper>
      <Divider sx={{ margin: "10px" }} />
      <CheckBoxList todos={todolist} handleDeleteBtn={handleDeleteBtn} />
    </div>
  );
}

export { InputText };
