import React from "react";
import PropTypes from "prop-types";

import { rhythm } from "../utils/typography";

// Import typefaces
import "typeface-montserrat";
import "typeface-merriweather";

class Subtitle extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          marginBottom: rhythm(2.5),
        }}
      >
        <p>{this.props.description}</p>
      </div>
    );
  }
}

Subtitle.propTypes = {
  description: PropTypes.string,
};

export default Subtitle;
