import React, { ReactElement } from "react";
import { Grid } from "@mui/material";
import { Link } from "gatsby";

import Bio from "./bio";
import { rhythm, scale } from "../utils/typography";

const ListLink = (props: React.PropsWithChildren<{ to: string }>) => (
  <span style={{ display: "inline-block", marginLeft: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </span>
);

interface Props {
  location: Window["location"];
  title: string;
  description: string;
  showBio: boolean;
  titleIcon: ReactElement;
}

export default function Header(props: Props) {
  const { location, title, description, showBio, titleIcon } = props;

  const superTop = [];
  const parts = location.pathname.split("/").filter((x) => !!x.trim().length);

  let link = "/";
  superTop.push(
    <Link to={link} key={link}>
      home
    </Link>
  );
  parts.forEach((part) => {
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
      <Grid
        style={{ marginBottom: rhythm(0.6) }}
        container
        justifyContent="space-between"
        spacing={1}
        alignItems="center"
      >
        <Grid item>
          <i style={{ ...scale(-1 / 4) }}>{superTop}</i>
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
            <ListLink to="/projects/">Projects</ListLink>
            <ListLink to="/blog/">Blog</ListLink>
            <ListLink to="/poetry/">Poetry</ListLink>
            <ListLink to="/music/">Music</ListLink>
            <ListLink to="/writing/">Writing</ListLink>
            <ListLink to="/tech/">Tech</ListLink>
            <ListLink to="/theater/">Theater</ListLink>
          </span>
        </Grid>
      </Grid>
      <h1 style={{ ...scale(1.5), marginTop: 0, marginBottom: rhythm(0.75) }}>
        {title} {titleIcon}
      </h1>
      <Grid
        container
        style={{ marginBottom: rhythm(0.6) }}
        justifyContent="flex-start"
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
      </Grid>
    </header>
  );
}
