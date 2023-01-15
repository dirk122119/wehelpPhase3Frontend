import * as React from "react";
import Container from "@mui/material/Container";
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
