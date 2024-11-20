import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { L } from "../utils";

import Layout from "../components/layout";

const Links = {
  illumio: "https://illumio.com",
  uw: "https://uw.edu",
  cs: "https://cs.uw.edu",
  uchicago: "https://cs.uchicago.edu",
  games: "https://www.youtube.com/playlist?list=PLHGainiu-yeQDDL-MlGiJxLC_ayim-aEg",
  kinspire: "https://kinspire.org",
  asa: "https://desiacappella.org",
  ekta: "https://about.ekta.app",
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
        Hi there! I&apos;m Sarang Joshi, a <Link to="/academia">computer scientist</Link>, singer,
        and life enthusiast studying as a second-year Computer Science PhD student at the{" "}
        <L to={Links.uchicago}>University of Chicago</L> in Chicago, IL. I graduated cum laude from
        the <L to={Links.uw}>University of Washington, Seattle</L> in 2018, with a B.S. in{" "}
        <L to={Links.cs}>Computer Science</L> with Honors, where I was a Teaching Assistant and
        Research Assistant, and worked at <L to={Links.illumio}>Illumio</L> for 5 years before
        starting my PhD in 2023.
      </p>
      <p>
        I currently serve as an Executive Director of Programs at{" "}
        <L to={Links.kinspire}>Kinspire</L>, a 501(c)(3) dedicated to the revitalization of
        education for children in orphanages in India, and CTO of <L to={Links.ekta}>Ekta</L>, a
        unified platform for the collegiate South-Asian performing circuits. I formerly served as an
        Advisor and Director of <L to={Links.asa}>the Association of South-Asian A cappella</L>, a
        non-profit working to foster the growth of the South-Asian a cappella artform in college
        campuses and across the country.
      </p>
      <p>
        Outside of that, I like to <Link to="/music">make music</Link> (occasionally{" "}
        <Link to="/originalmusic">composing my own</Link>), <Link to="/blog">write</Link>,{" "}
        <L to={Links.games}>play video games</L>, <Link to="/projects">program even more</Link>, and
        travel when I can. This website is intended to be a central place to keep track of all of my
        work, so feel free to explore!
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
