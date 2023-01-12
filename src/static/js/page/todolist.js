import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {InputText} from "../component/InputText"
function TodoList() {
    
   

  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "30px" }}
      >
        <InputText/>
      </Grid>
    </Container>
  );
}

export { TodoList };
