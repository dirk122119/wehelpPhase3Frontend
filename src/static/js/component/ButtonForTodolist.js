import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from 'react-router-dom';

function ButtonForTodolist() {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{marginTop:"30px"}}
      >
        <Button
          component={Link}
          to="/list"
          variant="contained"
          
        >
          點我進入App2
        </Button>
      </Grid>
    </Container>
  );
}

export { ButtonForTodolist };
