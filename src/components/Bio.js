import React from "react";

// Import typefaces
import "typeface-montserrat";
import "typeface-merriweather";

import "./Bio.css";

class Bio extends React.Component {
  render() {
    return (
      <div className="bio">
        <p>
          Written by <strong>Sarang Joshi</strong> who currently lives in
          Sunnyvale, hailing from Seattle.
        </p>
      </div>
    );
  }
}

export default Bio;
