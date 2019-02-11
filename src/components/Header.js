import * as React from "react";
import { Link } from "gatsby";
import each from "lodash/each";
import PropTypes from "prop-types";

import Bio from "./bio";
import { rhythm, scale } from "../utils/typography";

const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {
            showBio
            ? <Bio />
            : <i>{description}</i>
          }
          <ul style={{ listStyle: "none", flexShrink: 0 }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/blog/">Blog</ListLink>
            {/*<ListLink to="/poetry/">Poetry</ListLink>*/}
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
