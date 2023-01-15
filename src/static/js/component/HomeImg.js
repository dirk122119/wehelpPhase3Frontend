import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from 'react-router-dom';
import img from '../../img/homepage.jpeg'

function HomeImg() {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{marginTop:"30px"}}
      >
        <img src={img}></img>
      </Grid>
    </Container>
  );
}

export { HomeImg };
