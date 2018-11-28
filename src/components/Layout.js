import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import { rhythm } from "../utils/typography";
import * as pt from "../utils/proptypes";

export default class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;

    return (
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header title={title} location={location} />
        {children}
      </div>
    );
  }
}

Layout.propTypes = {
  location: PropTypes.object,
  title: PropTypes.string,
  children: pt.children,
};
