import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import PropTypes from "prop-types";

import Layout from "../../components/Layout";
import { rhythm } from "../../utils/typography";

const POETRY_TITLE = "Poetry";
const POETRY_DESCRIPTION =
  "It needs to rhyme, but it also needs to sound not cheesy. H'm.";

class PoetryIndex extends React.Component {
  render() {
    const title = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allMarkdownRemark.edges");

    return (
      <Layout
        location={this.props.location}
        title={POETRY_TITLE}
        description={POETRY_DESCRIPTION}
        helmetTitle={`${POETRY_TITLE} | ${title}`}
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
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          );
        })}
      </Layout>
    );
  }
}

PoetryIndex.propTypes = {
  location: PropTypes.object,
};

export default PoetryIndex;

// filter by blog slug
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        poetryTitle
        poetryDescription
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: "/.*/poetry/.*/" } } }
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
