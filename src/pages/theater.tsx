import React from "react";
import { graphql, PageProps } from "gatsby";

import PostExcerpt from "../components/postExcerpt";
import Layout from "../components/layout";
import SEO from "../components/seo";

const TITLE = "Theater";
const DESCRIPTION =
  "All the world's a stage, and all the men and women merely players.";

export default function TheaterIndex(props: PageProps<any>) {
  const { data } = props;
  const title = data.site.siteMetadata.title;
  const posts = data.allFountain.edges;

  // TODO factor out redundant code about helmetTitle
  return (
    <Layout
      location={props.location}
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

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFountain(sort: { frontmatter: { date: DESC } }) {
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
