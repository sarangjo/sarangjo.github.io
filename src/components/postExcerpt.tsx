import React from "react";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography";

const content = (node, type) =>
  type === "theater" ? (
    <p>{node.frontmatter.source}</p>
  ) : (
    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
  );

export default function PostExcerpt({ node, type }: { node: any; type?: string }) {
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
}
