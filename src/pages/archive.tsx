import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../components/layout";
import PostExcerpt, { PostEdge } from "../components/postExcerpt";
import { simpleDateParser } from "../utils/utils";

export default function ArchivePage({
  location,
  data,
}: PageProps<{
  allMarkdownRemark: { edges: PostEdge[] };
  allFountain: { edges: PostEdge[] };
}>) {
  const poetryPosts = data.allMarkdownRemark.edges;
  const theaterPosts = data.allFountain.edges;

  return (
    <Layout location={location} title="Archive" description="Blowing the dust off of these gems.">
      Enjoy some of these gems from my high school years and before.
      <h1>Poetry</h1>
      <p>No fancy description. Just poetry. This is serious business.</p>
      {poetryPosts.map((e, i) => {
        e.node.frontmatter.date = simpleDateParser(e.node.frontmatter.date);
        return <PostExcerpt key={i} node={e.node} type="poetry" />;
      })}
      <h1>Theater</h1>
      <p>All the world's a stage, and all the men and women merely players.</p>
      {theaterPosts.map(({ node }, i) => (
        <PostExcerpt key={i} node={node} type="theater" />
      ))}
    </Layout>
  );
}

//       filter: { fields: { slug: { regex: "/.*/archive/.*/" } } }

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { type: { eq: "poetry" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
        }
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
