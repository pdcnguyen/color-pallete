import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from './PaletteFooter'
import { withStyles } from "@material-ui/styles";


const styles = {
Palette: {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
},
colors: {
  height: '90%',
}
}

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(newLevel) {
    this.setState({ level: newLevel });
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { colors, PaletteName, id} = this.props.palette;
    const {classes} = this.props
    console.log(PaletteName)
    const { level, format } = this.state;
    const ColorBoxes = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={id}
        showingFullPalette={true}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColors={true}
        />

        <div className={classes.colors} >{ColorBoxes}</div>
        <PaletteFooter paletteName={PaletteName}/>
      </div>
    );
  }
}
export default withStyles(styles)(Palette);
