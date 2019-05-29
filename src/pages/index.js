import React from "react";
import { graphql, Link } from "gatsby";
import get from "lodash/get";
import zipWith from "lodash/zipWith";
import PropTypes from "prop-types";

import Layout from "../components/layout";

const LINKS = [
  "https://illumio.com",
  "https://uw.edu",
  "https://cs.uw.edu",
  "papers/Joshi_Senior_Thesis.pdf",
  "https://docs.google.com/presentation/d/e/2PACX-1vRuce7h-qTiSWLqWiQV-dWiqu8P5Qqd48mvFM15-2wApVB8qFY9MM4blEn7iGN4xJm_u4DD4DEbJhl2/pub?start=false&loop=false&delayms=3000",
  "https://misl.cs.washington.edu/",
  "https://www.youtube.com/playlist?list=PLB0785C00EA91F358",
  "https://www.youtube.com/playlist?list=PLHGainiu-yeQDDL-MlGiJxLC_ayim-aEg",
  "https://github.com/sarangjo",
];

// Helper component for a link out of the home page in a new tab
const L = ({ i, to, children }) => (
  <a href={to ? to : LINKS[i]} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);
L.propTypes = {
  i: PropTypes.number,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// TA classes/quarters list
const CLASSES = [
  { c: 143, q: "15sp" },
  { c: 143, q: "15au" },
  { c: 351, q: "16wi" },
  { c: 351, q: "16sp" },
  { c: 311, q: "16au" },
  { c: 351, q: "17wi" },
  { c: 451, q: "17sp" },
  { c: 451, q: "17au" },
  { c: 451, q: "18wi" },
  { c: 452, q: "18sp" },
];

const classes = sentence =>
  zipWith(CLASSES, sentence.split(" "), (c, w) => ({ ...c, w })).map(
    ({ c, q, w }, i) => (
      <React.Fragment key={i}>
        {" "}
        <L to={`https://courses.cs.washington.edu/courses/cse${c}/${q}/`}>
          {w}
        </L>
      </React.Fragment>
    )
  );

class Index extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const siteDescription = get(
      this,
      "props.data.site.siteMetadata.description"
    );

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        description={siteDescription}
        showBio={true}
      >
        <p>
          Hi there! I&apos;m Sarang Joshi, a software developer, singer, and
          life enthusiast working at <L i={0}>Illumio</L> in Sunnyvale, CA.
        </p>
        <p>
          I graduated cum laude from the{" "}
          <L i={1}>University of Washington, Seattle</L>, with a B.S. in{" "}
          <L i={2}>Computer Science</L> with Honors and a minor in Math. During
          undergrad, I was a Teaching Assistant for
          {classes(
            "various undergraduate classes in the Computer Science and Engineering department"
          )}
          , and completed my Senior Departmental Honors research on{" "}
          <L i={3}>
            Multi-Location Droplet Management for Digital Microfluidics
          </L>{" "}
          (<L i={4}>presentation</L>) with the UW{" "}
          <L i={5}>Molecular Information Systems Lab</L>.
        </p>
        <p>
          Outside of work, I like to <L i={6}>sing</L>,{" "}
          <Link to="/blog">write</Link>, <L i={7}>play video games</L>,{" "}
          <L i={8}>program</L>, and travel when I can. You&apos;ll find most of
          my work on this website, so feel free to explore!
        </p>
      </Layout>
    );
  }
}

Index.propTypes = {
  location: PropTypes.object,
};

export default Index;

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
