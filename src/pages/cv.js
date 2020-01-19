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

const Links = {
  PDF: "papers/Joshi_Senior_Thesis.pdf",
  PRESENT:
    "https://docs.google.com/presentation/d/e/2PACX-1vRuce7h-qTiSWLqWiQV-dWiqu8P5Qqd48mvFM15-2wApVB8qFY9MM4blEn7iGN4xJm_u4DD4DEbJhl2/pub?start=false&loop=false&delayms=3000",
  MISL: "https://misl.cs.washington.edu/",
  SCHOLAR:
    "https://scholar.google.com/citations?hl=en&view_op=list_works&user=FjO8c3gAAAAJ",
};

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
        <h3>Illumio</h3>
        <p>
          Software Engineer&nbsp;<i>[August 2018 &ndash; present]</i>
        </p>
        <h3>Arista</h3>
        <p>
          Software Development Engineering Intern&nbsp;
          <i>[June &mdash; September 2017]</i>
        </p>
        <h3>Cisco</h3>
        <p>
          Software Development Engineering Intern&nbsp;
          <i>[June &ndash; September 2016]</i>
        </p>
        <h3>Rinworks</h3>
        <p>
          Software Development Engineering Intern&nbsp;
          <i>[June &ndash; September 2015]</i>
        </p>
        <h2>Education</h2>
        <h3>University of Washington</h3>
        <p>
          During undergrad, I was a Teaching Assistant for
          {classes(
            "various undergraduate classes in the Computer Science and Engineering department"
          )}
          , and completed my Senior Departmental Honors research on{" "}
          <L to={Links.PDF}>
            Multi-Location Droplet Management for Digital Microfluidics
          </L>{" "}
          (<L to={Links.PRESENT}>presentation</L>) with the UW{" "}
          <L to={Links.MISL}>Molecular Information Systems Lab</L>. My{" "}
          <L to={Links.SCHOLAR}>Google Scholar page</L>.
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
