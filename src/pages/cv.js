import { L } from "../utils";
import zipWith from "lodash/zipWith";
import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import PropTypes from "prop-types";

import Layout from "../components/layout";

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

const LINKS = [
  "papers/Joshi_Senior_Thesis.pdf",
  "https://docs.google.com/presentation/d/e/2PACX-1vRuce7h-qTiSWLqWiQV-dWiqu8P5Qqd48mvFM15-2wApVB8qFY9MM4blEn7iGN4xJm_u4DD4DEbJhl2/pub?start=false&loop=false&delayms=3000",
  "https://misl.cs.washington.edu/",
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

class CvPage extends React.Component {
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
      >
        <h2>Work</h2>
        <h2>Education</h2>
        <h3>University of Washington</h3>
        <p>
          During undergrad, I was a Teaching Assistant for
          {classes(
            "various undergraduate classes in the Computer Science and Engineering department"
          )}
          , and completed my Senior Departmental Honors research on{" "}
          <L to={LINKS[0]}>
            Multi-Location Droplet Management for Digital Microfluidics
          </L>{" "}
          (<L to={LINKS[1]}>presentation</L>) with the UW{" "}
          <L to={LINKS[2]}>Molecular Information Systems Lab</L>.
        </p>
      </Layout>
    );
  }
}

CvPage.propTypes = {
  location: PropTypes.object,
};

export default CvPage;

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
