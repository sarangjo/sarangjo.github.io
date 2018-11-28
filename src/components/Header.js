import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import _ from "lodash";

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
    const { location, title, description } = this.props;

    const superTop = [];
    const parts = location.pathname.split("/").filter(x => !!x.trim().length);

    let link = "/";
    superTop.push(
      <Link to={link} key={link}>
        home
      </Link>
    );
    _.each(parts, part => {
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>{description}</p>
          <ul style={{ listStyle: "none", flexShrink: 0 }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/blog/">Blog</ListLink>
            <ListLink to="/poetry/">Poetry</ListLink>
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
};

export default Header;
