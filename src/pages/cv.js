import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import PropTypes from "prop-types";

import Layout from "../components/layout";

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
