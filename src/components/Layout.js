import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./Header";
import { rhythm } from "../utils/typography";
import * as pt from "../utils/proptypes";

const Layout = ({ location, children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: rhythm(60),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header title={data.site.siteMetadata.title} location={location} />
        {children}
      </div>
    )}
  />
);

Layout.propTypes = {
  location: PropTypes.object,
  title: PropTypes.string,
  children: pt.children,
};

export default Layout;
