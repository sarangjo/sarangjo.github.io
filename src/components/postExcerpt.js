import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography";

const content = (node, type) =>
  type === "theater" ? (
    <p>{node.frontmatter.source}</p>
  ) : (
    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
  );

const PostExcerpt = ({ node, type }) => {
  const title = node.frontmatter.title || node.fields.slug;
  return (
    <div key={node.fields.slug}>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
          {title}
        </Link>
      </h3>
      <small>{node.frontmatter.date}</small>
      {content(node, type)}
    </div>
  );
};

PostExcerpt.propTypes = {
  node: PropTypes.object,
  type: PropTypes.string,
};

export default PostExcerpt;
