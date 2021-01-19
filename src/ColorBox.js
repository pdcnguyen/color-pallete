import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";

import "./ColorBox.css";

const styles = {
  colorBox: {
    width: "20%",
    height: (props) => (props.showingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",

    "&:hover $copyOverlay": {
      borderRadius: "30px",
      opacity: "1",
      transform: "translateY(-15%)",
      zIndex: "10",
      position: "absolute",
    },
    "&:hover $copyButton": {
      opacity: "1",
      transition: "0.5s",
      zIndex: "11",
    },
    
  },
  
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "all 0.5s",
    transform: "translateY(0)",
    borderRadius: "0",
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.6 ? "black" : "white",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.2 ? "white" : "black",
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },
  copyButton: {
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    color: (props) =>
      chroma(props.background).luminance() >= 0.6 ? "black" : "white",
    textTransform: "uppercase",
    border: "none",
    opacity: "0",
  },
  copyMsg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: "0",
    color: (props) =>
      chroma(props.background).luminance() >= 0.6 ? "black" : "white",
  },
  show: {
    opacity: "1",
    zIndex: "11",
  },
  noShow: {
    display: "none",
  },
  textDisplay: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.6 ? "black" : "white",
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
  },
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 500);
    });
  }
  render() {
    const {
      name,
      background,
      paletteId,
      id,
      showingFullPalette,
      classes,
    } = this.props;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.colorBox }>
          <div
            style={{ background }}
            className={`${classes.copyOverlay} `}
          ></div>
          <div
            className={`${classes.copyMsg} ${
              this.state.copied && classes.show
            }`}
          >
            <h1 className={classes.textDisplay}>copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button
              className={`${classes.copyButton} ${
                this.state.copied && classes.noShow
              }`}
            >
              Copy
            </button>
          </div>
          {showingFullPalette ? (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={classes.seeMore}>More</span>
            </Link>
          ) : null}
        </div>
      </CopyToClipboard>
    );
  }
}
export default withStyles(styles)(ColorBox);
