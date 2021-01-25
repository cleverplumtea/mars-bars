import React from "react";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import marsGif from "../assets/marsgif.gif";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${marsGif})`,
    backgroundSize: "cover",
    height: "100vh",
  },
  button: {
    fontFamily: "Montserrat",
    backgroundColor: "#fff",
    borderRadius: 0,
    letterSpacing: 2,
    paddingLeft: "1em",
    paddingRight: "1em",
    marginTop: "5em",
  },
}));

const Landing = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Typography variant="h1" style={{ color: "#fff" }}>
        WELCOME TO MARS
      </Typography>
      <Button component={Link} to='./marsinfo' classes={{ root: classes.button }}>
        ENTER
      </Button>
    </Grid>
  );
};

export default Landing;
