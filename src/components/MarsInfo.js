import React from "react";
import Images from "./Images";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({}));

const MarsInfo = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid>
      <Typography>information about mars</Typography>
      <Images />
    </Grid>
  );
};

export default MarsInfo;
