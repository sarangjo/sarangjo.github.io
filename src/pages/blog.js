import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import PostExcerpt from "../components/postExcerpt";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BLOG_TITLE = "Life Enthusiasm";
const BLOG_DESCRIPTION = "The world is a beautiful place.";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout
        location={this.props.location}
        title={BLOG_TITLE}
        description={BLOG_DESCRIPTION}
        helmetTitle={`${BLOG_TITLE} | ${siteTitle}`}
      >
        <SEO
          title="Blog"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {posts.map(({ node }, i) => (
          <PostExcerpt key={i} node={node} />
        ))}
      </Layout>
    );
  }
}

BlogIndex.propTypes = {
  location: PropTypes.object,
  data: PropTypes.object,
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: "//blog/.*/" } } }
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
