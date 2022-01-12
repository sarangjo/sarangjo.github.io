import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { L } from "../utils";

import Layout from "../components/layout";

const Links = {
  illumio: "https://illumio.com",
  uw: "https://uw.edu",
  cs: "https://cs.uw.edu",
  songs: "https://www.youtube.com/playlist?list=PLB0785C00EA91F358",
  games:
    "https://www.youtube.com/playlist?list=PLHGainiu-yeQDDL-MlGiJxLC_ayim-aEg",
  kinspire: "https://kinspire.org",
  asa: "https://desiacappella.org",
};

export default function Index(props: PageProps<any>) {
  const siteTitle = props?.data?.site?.siteMetadata?.title;
  const siteDescription = props?.data?.site?.siteMetadata?.description;

  return (
    <Layout
      location={props.location}
      title={siteTitle}
      description={siteDescription}
      showBio={true}
    >
      <p>
        Hi there! I&apos;m Sarang Joshi, a software developer, singer, and life
        enthusiast working at <L to={Links.illumio}>Illumio</L> in Bellevue, WA.
        I graduated cum laude from the{" "}
        <L to={Links.uw}>University of Washington, Seattle</L>, with a B.S. in{" "}
        <L to={Links.cs}>Computer Science</L> with Honors.
      </p>
      <p>
        I am also the Co-Director of <L to={Links.kinspire}>Kinspire</L>, a
        501(c)(3) dedicated to the revitalization of education for children in
        orphanages in India, and Co-Director of{" "}
        <L to={Links.asa}>the Association of South-Asian A cappella</L>, a
        non-profit working to foster the growth of the South-Asian a cappella
        artform in college campuses and across the country.
      </p>
      <p>
        Outside of that, I like to <L to={Links.songs}>sing</L>,{" "}
        <Link to="/blog">write</Link>, <L to={Links.games}>play video games</L>,{" "}
        <Link to="/projects">program even more</Link>, and travel when I can.
        This website is intended to be a central place to keep track of all of
        my work, so feel free to explore!
      </p>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
