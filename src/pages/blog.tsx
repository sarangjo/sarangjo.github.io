import React from "react";
import Layout from "../components/layout";
import { graphql, PageProps } from "gatsby";
import PostExcerpt, { PostNode } from "../components/postExcerpt";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const simpleDateParser = (d: string) => {
  const parts = d.split("-");
  return parts.length === 3 ? `${MONTHS[+parts[1] - 1]} ${+parts[2]}, ${+parts[0]}` : d;
};

// Must be sorted!
const external: PostEdge[] = [
  {
    node: {
      fields: {
        slug: "https://ani-sarang.medium.com/climate-change-in-america-a-defining-crisis-of-our-century-75e959f850d5",
        external: true,
        note: "Co-Authored with Anirudh Ramanathan.",
      },
      frontmatter: {
        title: "Climate Change in America: A Defining Crisis of Our Century",
        date: "2021-01-24",
      },
    },
    type: "external",
  },
];

export interface PostEdge {
  node: PostNode;
  type?: string;
}

const title = "Life Enthusiasm";

export default function BlogPage({
  location,
  data,
}: PageProps<{
  allMarkdownRemark: {
    edges: PostEdge[];
  };
}>) {
  const mdPosts = data.allMarkdownRemark.edges;

  const posts: PostEdge[] = [];
  let postIdx = 0,
    externalIdx = 0;
  while (postIdx < mdPosts.length && externalIdx < external.length) {
    if (mdPosts[postIdx].node.frontmatter.date > external[externalIdx].node.frontmatter.date) {
      posts.push(mdPosts[postIdx++]);
    } else {
      posts.push(external[externalIdx++]);
    }
  }
  if (postIdx < mdPosts.length) {
    posts.push(...mdPosts.slice(postIdx));
  }
  if (externalIdx < external.length) {
    posts.push(...external.slice(externalIdx));
  }

  return (
    <Layout location={location} title={title} description="The world is a beautiful place.">
      {posts.map((e, i) => {
        e.node.frontmatter.date = simpleDateParser(e.node.frontmatter.date);

        return <PostExcerpt key={i} node={e.node} type={e.type} />;
      })}
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fields: { slug: { regex: "/.*/blog/.*/" } } }
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
  }
`;

// (formatString: "MMMM DD, YYYY")
