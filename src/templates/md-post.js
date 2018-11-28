import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import PropTypes from "prop-types";

import Layout from "../components/Layout";
import { rhythm } from "../utils/typography";

export default class MarkdownPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;

    const siteTitle = get(this.props, "data.site.siteMetadata.title");

    const description = post.excerpt;
    const { previous, next } = this.props.pageContext;

    let prevNextLinks;
    if (previous || next) {
      prevNextLinks = (
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      );
    }

    return (
      <Layout
        location={this.props.location}
        helmetTitle={`${post.frontmatter.title} | ${siteTitle}`}
        title={post.frontmatter.title}
        helmetDescription={description}
        description={`${post.frontmatter.date} - ${post.frontmatter.category}`}
      >
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        {prevNextLinks}
      </Layout>
    );
  }
}

MarkdownPostTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        category
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
