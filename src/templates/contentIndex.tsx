import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import PostExcerpt from "../components/postExcerpt";
import SEO from "../components/seo";

type CIProps = PageProps<any>;

export default function ContentIndex(props: CIProps) {
  const { data /*title, description*/ } = props;

  const { title, description } = props.pageContext as any;

  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout
      location={props.location}
      title={title}
      description={description}
      helmetTitle={`${title} | ${siteTitle}`}
    >
      <SEO title="Blog" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      {posts.map(({ node }, i) => (
        <PostExcerpt key={i} node={node} />
      ))}
    </Layout>
  );
}

export const CIPageQuery = graphql`
  query ContentIndex($myPath: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: $myPath } } }
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
