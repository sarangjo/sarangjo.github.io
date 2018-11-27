import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import Subtitle from "../../components/Subtitle";
import Layout from "../../components/Layout";
import { rhythm } from "../../utils/typography";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.blogTitle");
    const siteDescription = get(
      this,
      "props.data.site.siteMetadata.blogDescription"
    );
    const posts = get(this, "props.data.allMarkdownRemark.edges");

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: "en" }}
          meta={[{ name: "description", content: siteDescription }]}
          title={`Blog | ${siteTitle}`}
        />
        <Subtitle description={siteDescription} />
        {posts.map(({ node }) => {
          const title = get(node, "frontmatter.title") || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: "none" }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>
                {node.frontmatter.date}
                &nbsp;&mdash;&nbsp;
                {node.frontmatter.category}
              </small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          );
        })}
      </Layout>
    );
  }
}

BlogIndex.propTypes = {
  location: PropTypes.object,
};

export default BlogIndex;

// TODO I feel like allMarkdownRemark can be replaced by markdownRemark? Because
// we only want certain blog posts. The key thing to figure out is the best
// place in the code to actually make the throttling
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        blogTitle
        blogDescription
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
          }
        }
      }
    }
  }
`;
