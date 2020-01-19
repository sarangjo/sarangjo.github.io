import * as React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "gatsby";
import each from "lodash/each";
import PropTypes from "prop-types";

import Bio from "./bio";
import { rhythm, scale } from "../utils/typography";
import * as pt from "../utils/proptypes";

const ListLink = props => (
  <span style={{ display: "inline-block", marginLeft: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </span>
);

ListLink.propTypes = {
  to: PropTypes.string,
  children: pt.children,
};

class Header extends React.Component {
  render() {
    const { location, title, description, showBio, titleIcon } = this.props;

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
          {title} {titleIcon}
        </h1>
        <Grid
          container
          style={{ marginBottom: rhythm(0.6) }}
          justify="space-between"
          spacing={1}
          alignItems="center"
        >
          <Grid item>
            {showBio ? (
              <Bio />
            ) : (
              <i style={{ margin: "auto 0" }}>{description}</i>
            )}
          </Grid>
          <Grid item>
            <span
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
              <ListLink to="/music/">Music</ListLink>
              <ListLink to="/projects/">Projects</ListLink>
            </span>
          </Grid>
        </Grid>
      </header>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object,
  title: PropTypes.string,
  titleIcon: PropTypes.node,
  description: PropTypes.string,
  showBio: PropTypes.bool,
};

export default Header;
