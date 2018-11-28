import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import Header from "./Header";
import { rhythm } from "../utils/typography";
import * as pt from "../utils/proptypes";

// Import typefaces
import "typeface-montserrat";
import "typeface-merriweather";

export default class Layout extends React.Component {
  render() {
    const {
      location,
      title,
      description,
      helmetTitle,
      helmetDescription,
      children,
    } = this.props;

    return (
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Helmet
          htmlAttributes={{ lang: "en" }}
          meta={[
            { name: "description", content: helmetDescription || description },
          ]}
          title={helmetTitle || title}
        />
        <Header title={title} description={description} location={location} />
        {children}
      </div>
    );
  }
}

Layout.propTypes = {
  location: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  helmetTitle: PropTypes.string,
  helmetDescription: PropTypes.string,
  children: pt.children,
};
