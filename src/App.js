import React, { Component } from "react";
import { generatePallete } from "./colorHelpers";
import Palette from "./Palette";
import seedColors from "./seedColors";

class App extends Component {
  render() {
    return (
      <div>
        <Palette pallete={generatePallete(seedColors[3])} />
      </div>
    );
  }
}

export default App;
