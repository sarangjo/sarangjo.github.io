import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import PostExcerpt from "../components/postExcerpt";
import SEO from "../components/seo";

export default function MdIndex(props: PageProps<any>) {
  const { data } = props;

  // TODO stronger typing
  const { title, description, seo } = props.pageContext as any;

  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout
      location={props.location}
      title={title}
      description={description}
      helmetTitle={`${title} | ${siteTitle}`}
    >
      <SEO title={title} keywords={seo} />
      {posts.map(({ node }, i) => (
        <PostExcerpt key={i} node={node} />
      ))}
    </Layout>
  );
}

export const pageQuery = graphql`
  query MdIndex($myPath: String) {
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
