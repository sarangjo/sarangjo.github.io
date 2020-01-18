import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import PostExcerpt from "../components/postExcerpt";
import Layout from "../components/layout";
import SEO from "../components/seo";

const TECH_TITLE = "Tech Notes";
const TECH_DESCRIPTION =
  "A small contribution to the massive collection of information about the tech world.";

class TechIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout
        location={this.props.location}
        title={TECH_TITLE}
        description={TECH_DESCRIPTION}
        helmetTitle={`${TECH_TITLE} | ${siteTitle}`}
      >
        <SEO
          title="Tech"
          keywords={[`tech`, `gatsby`, `javascript`, `react`]}
        />
        {posts.map(({ node }, i) => (
          <PostExcerpt key={i} node={node} />
        ))}
      </Layout>
    );
  }
}

TechIndex.propTypes = {
  location: PropTypes.object,
  data: PropTypes.object,
};

export default TechIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: "//tech/.*/" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
