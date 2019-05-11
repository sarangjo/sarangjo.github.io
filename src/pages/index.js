import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import PropTypes from "prop-types";

import Layout from "../components/layout";

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
          Hi there! I&apos;m Sarang Joshi, a software developer working at&nbsp;
          <a
            href="https://illumio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Illumio
          </a>
          . I graduated from the University of Washington, Seattle, with a Bachelor's of Science in Computer Science cum laude (or something like that) and a minor in Math. This website serves as a central repository for the things I've worked on and things I like.
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
