import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import PropTypes from "prop-types";

import Layout from "../../components/Layout";
import { rhythm } from "../../utils/typography";

const BLOG_TITLE = "Life Enthusiasm";
const BLOG_DESCRIPTION = "Because OC is overrated.";

class BlogIndex extends React.Component {
  render() {
    const title = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allMarkdownRemark.edges");

    return (
      <Layout
        location={this.props.location}
        title={BLOG_TITLE}
        description={BLOG_DESCRIPTION}
        helmetTitle={`${BLOG_TITLE} | ${title}`}
      >
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

// filter by blog slug
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: "/.*/blog/.*/" } } }
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
            category
          }
        }
      }
    }
  }
`;
