import * as React from "react";
import { Link } from "gatsby";
import each from "lodash/each";
import PropTypes from "prop-types";

import Bio from "./bio";
import { rhythm, scale } from "../utils/typography";
import * as pt from "../utils/proptypes";

const ListLink = props => (
  <li style={{ display: "inline-block", marginLeft: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

ListLink.propTypes = {
  to: PropTypes.string,
  children: pt.children,
};

class Header extends React.Component {
  render() {
    const { location, title, description, showBio } = this.props;

    const superTop = [];
    const parts = location.pathname.split("/").filter(x => !!x.trim().length);

    let link = "/";
    superTop.push(
      <Link to={link} key={link}>
        home
      </Link>
    );
    each(parts, part => {
      link += `${part}/`;
      superTop.push(
        <span key={link}>
          &nbsp;&gt;&nbsp;
          <Link to={link}>{part}</Link>
        </span>
      );
    });

    return (
      <header
        style={{
          marginBottom: rhythm(0.4),
        }}
      >
        <i style={{ ...scale(-1 / 4) }}>{superTop}</i>
        <h1 style={{ ...scale(1.5), marginTop: 0, marginBottom: rhythm(0.75) }}>
          {title}
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: rhythm(0.6),
          }}
        >
          {showBio ? (
            <Bio />
          ) : (
            <i style={{ margin: "auto 0" }}>{description}</i>
          )}
          <ul
            style={{
              listStyle: "none",
              flexShrink: 0,
              marginBottom: "auto",
              marginTop: "auto",
            }}
          >
            <ListLink to="/">Home</ListLink>
            <ListLink to="/blog/">Blog</ListLink>
            <ListLink to="/theater/">Theater</ListLink>
            <ListLink to="/tech/">Tech</ListLink>
            <ListLink to="/projects/">Projects</ListLink>
          </ul>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  showBio: PropTypes.bool,
};

export default Header;
