import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import PropTypes from "prop-types";

import Layout from "../components/Layout";
import { rhythm, scale } from "../utils/typography";

const BLOG_TYPE = "blog";
const OTHER_TYPE = "other";

export default class MarkdownPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;

    let siteTitle;
    switch (this.props.type) {
    case BLOG_TYPE:
      siteTitle = get(this.props, "data.site.siteMetadata.blogTitle");
      break;
    case OTHER_TYPE:
    default:
      siteTitle = get(this.props, "data.site.siteMetadata.title");
      break;
    }

    const siteDescription = post.excerpt;
    const { previous, next } = this.props.pageContext;

    let prevNextLinks;
    if (previous && next) {
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
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: "en" }}
          meta={[{ name: "description", content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: "block",
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
          &nbsp;&mdash;&nbsp;
          <i>{post.frontmatter.category}</i>
        </p>
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
  type: PropTypes.string,
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
