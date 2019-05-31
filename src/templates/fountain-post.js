import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./fountain-post.css";

class FountainPostTemplate extends React.Component {
  render() {
    const post = this.props.data.fountain;
    const siteTitle = this.props.data.site.siteMetadata.title;
    // TODO add description as part of the summary of the piece
    // const description = post.excerpt;
    // helmetDescription={description}

    return (
      <Layout
        location={this.props.location}
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
}

FountainPostTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
  location: PropTypes.object,
};

export default FountainPostTemplate;

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
