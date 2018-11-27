import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import Subtitle from "../components/Subtitle";
import Layout from "../components/Layout";

class Index extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const siteDescription = get(
      this,
      "props.data.site.siteMetadata.description"
    );

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: "en" }}
          meta={[{ name: "description", content: siteDescription }]}
          title={siteTitle}
        />
        <Subtitle description={siteDescription} />
        <p>
          This is still construction, and will become less horrendous in
          upcoming weeks. Stay tuned!
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
