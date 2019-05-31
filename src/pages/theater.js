import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

const TITLE = "Theater";
const DESCRIPTION =
  "All the world's a stage, And all the men and women merely players.";

class TheaterIndex extends React.Component {
  render() {
    const { data } = this.props;
    const title = data.site.siteMetadata.title;
    const posts = data.allFountain.edges;

    return (
      <Layout
        location={this.props.location}
        title={TITLE}
        description={DESCRIPTION}
        helmetTitle={`${TITLE} | ${title}`}
        showBio={false}
      >
        <SEO
          title={TITLE}
          keywords={[`theater`, `gatsby`, `javascript`, `react`]}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p>{node.frontmatter.source}</p>
            </div>
          );
        })}
      </Layout>
    );
  }
}

TheaterIndex.propTypes = {
  location: PropTypes.object,
  data: PropTypes.object,
};

export default TheaterIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFountain(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            source
          }
        }
      }
    }
  }
`;
