import React, { ReactElement } from "react";
import { Link } from "gatsby";

import Bio from "./bio";
import { rhythm, scale } from "../utils/typography";

const ListLink = (props: React.PropsWithChildren<{ to: string; useA?: boolean }>) => (
  <span style={{ display: "inline-block", marginRight: "1rem" }}>
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
  description?: string;
  showBio?: boolean;
  titleIcon?: ReactElement;
}

const getParentParts = (fullPath: string) => {
  const parts = fullPath.split("/").filter((x) => !!x.trim().length);
  return parts.slice(0, parts.length - 1);
};

export default function Header(props: Props) {
  const { location, title, description, showBio, titleIcon } = props;

  // Evaluate the "parent" page
  const parentParts = getParentParts(location.pathname);
  let pageLineage: React.JSX.Element[] = [];
  if (parentParts.length > 0) {
    pageLineage.push(<span style={{ marginRight: "4px" }}>&uarr;</span>);
    let link = "/";

    // Fencepost
    parentParts.forEach((part: string, idx: number) => {
      link += `${part}/`;
      pageLineage.push(
        <span key={link}>
          <i style={{ ...scale(-1 / 4) }}>
            {idx !== 0 && "&nbsp;&gt;&nbsp;"}
            <Link to={link}>{part}</Link>
          </i>
        </span>
      );
    });
  }

  // marginRight: 0, marginLeft: "auto",

  return (
    <header
      style={{
        marginBottom: rhythm(0.4),
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "-8px 0px 1.05rem -8px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "inline-block" }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/academia">Academia</ListLink>
          <ListLink to="/projects/">Projects</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
          <ListLink to="/poetry/">Poetry</ListLink>
          <ListLink to="/music/">Music</ListLink>
          <ListLink to="/writing/">Writing</ListLink>
          {/* <ListLink to="/tech/">Tech</ListLink> */}
          <ListLink to="/theater/">Theater</ListLink>
          <ListLink to="/cv.pdf" useA>
            CV
          </ListLink>
        </div>
        <div style={{ display: "inline-block" }}>{pageLineage}</div>
      </div>
      <h1 style={{ ...scale(1.5), marginTop: 0, marginBottom: rhythm(0.75) }}>
        {title} {titleIcon}
      </h1>
      {showBio ? <Bio /> : <i style={{ margin: "auto 0" }}>{description}</i>}
    </header>
  );
}
