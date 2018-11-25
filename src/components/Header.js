import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import { rhythm, scale } from "../utils/typography";
import * as pt from "../utils/proptypes";

const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

ListLink.propTypes = {
  to: PropTypes.string,
  children: pt.children,
};

class Header extends React.Component {
  render() {
    const { location, title } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    const homeLink = (
      <Link
        style={{
          boxShadow: "none",
          textDecoration: "none",
          color: "inherit",
        }}
        to={"/"}
      >
        {title}
      </Link>
    );

    // Top of header
    let top;
    // TODO: not just home, but any category page
    if (location.pathname === rootPath) {
      top = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          {homeLink}
        </h1>
      );
    } else {
      top = (
        <h3
          style={{
            fontFamily: "Montserrat, sans-serif",
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          {homeLink}
        </h3>
      );
    }

    return (
      <div>
        {top}
        <header style={{ marginBottom: "1.5rem" }}>
          <ul style={{ listStyle: "none", float: "right" }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/poems/">Poems</ListLink>
          </ul>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object,
  title: PropTypes.string,
};

export default Header;
