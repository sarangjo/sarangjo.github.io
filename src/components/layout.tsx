import React, { ReactElement } from "react";
import Helmet from "react-helmet";
import Header from "./header";
import { rhythm } from "../utils/typography";
import "typeface-montserrat";
import "typeface-merriweather";

interface Props {
  location: Window["location"];
  title: string;
  titleIcon?: ReactElement;
  description?: string;
  helmetTitle?: string;
  helmetDescription?: string;
  showBio?: boolean;
}

export default function Layout(props: React.PropsWithChildren<Props>) {
  const {
    location,
    title,
    titleIcon,
    description,
    helmetTitle,
    helmetDescription,
    children,
    showBio,
  } = props;

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
