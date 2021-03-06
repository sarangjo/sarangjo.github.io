import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import PostExcerpt from "../components/postExcerpt";
import Layout from "../components/layout";
import SEO from "../components/seo";

const TITLE = "Theater";
const DESCRIPTION =
  "All the world's a stage, and all the men and women merely players.";

class TheaterIndex extends React.Component {
  render() {
    const { data } = this.props;
    const title = data.site.siteMetadata.title;
    const posts = data.allFountain.edges;

    // TODO factor out redundant code about helmetTitle
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
        {posts.map(({ node }, i) => (
          <PostExcerpt key={i} node={node} type="theater" />
        ))}
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
