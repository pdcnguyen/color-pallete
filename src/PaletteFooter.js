import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  PaletteFooter: {
    backgroundColor: "white",
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
  },
};
function PaletteFooter(props) {
  const { paletteName, classes } = props;
  return <footer className={classes.PaletteFooter}>{paletteName}</footer>;
}

export default withStyles(styles)(PaletteFooter);
