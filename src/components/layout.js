import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import Header from "./header";
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
      titleIcon,
      description,
      helmetTitle,
      helmetDescription,
      children,
      showBio,
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
        <Header
          title={title}
          titleIcon={titleIcon}
          description={description}
          location={location}
          showBio={showBio}
        />
        {children}
      </div>
    );
  }
}

Layout.propTypes = {
  location: PropTypes.object,
  title: PropTypes.string,
  titleIcon: PropTypes.node,
  description: PropTypes.string,
  helmetTitle: PropTypes.string,
  helmetDescription: PropTypes.string,
  children: pt.children,
  showBio: PropTypes.bool,
};
