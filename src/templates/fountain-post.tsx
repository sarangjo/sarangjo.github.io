import React from "react";
import { graphql, PageProps } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./fountain-post.css";

export default function FountainPostTemplate(props: PageProps<any>) {
  const post = props.data.fountain;
  const siteTitle = props.data.site.siteMetadata.title;
  // TODO add description as part of the summary of the piece
  // const description = post.excerpt;
  // helmetDescription={description}

  return (
    <Layout
      location={props.location}
      helmetTitle={`${post.frontmatter.title} | ${siteTitle}`}
      title={post.frontmatter.title}
      description={`${post.frontmatter.date}`}
    >
      <SEO title={post.frontmatter.title} />
      <div className="script">
        <div dangerouslySetInnerHTML={{ __html: post.html.script }} />
      </div>
    </Layout>
  );
}

// The `$slug` parameter is passed in for each page by the page context passed into the
// `createPage()` function in `gatsby-node.js` for fountain Gatsby objects.
export const pageQuery = graphql`
  query TheaterPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    fountain(fields: { slug: { eq: $slug } }) {
      id
      html {
        script
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
