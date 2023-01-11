import React, { ReactElement } from "react";
import { Link } from "gatsby";

import Bio from "./bio";
import { rhythm, scale } from "../utils/typography";

import "./header.css";

const ListLink = (
  props: React.PropsWithChildren<{ to: string; useA?: boolean }>
) => (
  <span style={{ display: "inline-block", marginLeft: "1rem" }}>
    {props.useA ? (
      <a href={props.to} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    ) : (
      <Link to={props.to}>{props.children}</Link>
    )}
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
      <div className="header-container header-space-between">
        <div className="header-item">
          <i style={{ ...scale(-1 / 4) }}>{superTop}</i>
        </div>
        <div className="header-item">
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
            <ListLink to="/uwcse">UW CSE</ListLink>
            <ListLink to="/blog/">Blog</ListLink>
            <ListLink to="/poetry/">Poetry</ListLink>
            <ListLink to="/music/">Music</ListLink>
            <ListLink to="/writing/">Writing</ListLink>
            <ListLink to="/tech/">Tech</ListLink>
            <ListLink to="/theater/">Theater</ListLink>
            <ListLink to="/cv.pdf" useA>
              CV
            </ListLink>
          </span>
        </div>
      </div>
      <h1 style={{ ...scale(1.5), marginTop: 0, marginBottom: rhythm(0.75) }}>
        {title} {titleIcon}
      </h1>
      {showBio ? <Bio /> : <i style={{ margin: "auto 0" }}>{description}</i>}
    </header>
  );
}
