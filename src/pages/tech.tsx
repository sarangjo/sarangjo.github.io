import React from "react";
import { graphql, PageProps } from "gatsby";

import PostExcerpt from "../components/postExcerpt";
import Layout from "../components/layout";
import SEO from "../components/seo";

const TECH_TITLE = "Tech Notes";
const TECH_DESCRIPTION =
  "A small contribution to the massive collection of information about the tech world.";

export default function TechIndex(props: PageProps<any>) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout
      location={props.location}
      title={TECH_TITLE}
      description={TECH_DESCRIPTION}
      helmetTitle={`${TECH_TITLE} | ${siteTitle}`}
    >
      <SEO title="Tech" keywords={[`tech`, `gatsby`, `javascript`, `react`]} />
      {posts.map(({ node }, i) => (
        <PostExcerpt key={i} node={node} />
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
