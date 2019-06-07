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
        <ul>
          <li>Latest: The Joshi Show, Chunar</li>
          <li>College: Awaaz</li>
          <li>
            High school: Part of a Painting, Viva la Vida, Talk Dirty To Me
          </li>
          <li>Early days: Gaaravaa, Tu Hi Haqeeqat</li>
        </ul>
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
