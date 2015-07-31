import React from "react";
import Radium from "radium";


@Radium
class VictoryAxis extends React.Component {
  getStyles() {
    return {
      base: {
        color: "#000",
        fontSize: 12,
        textDecoration: "underline"
      },
      red: {
        color: "#d71920",
        fontSize: 30
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <div style={[styles.base, this.props.color === "red" && styles.red]}>
        Edit me!
      </div>
    );
  }
}

VictoryAxis.propTypes = {
  color: React.PropTypes.string
};

export default VictoryAxis;
