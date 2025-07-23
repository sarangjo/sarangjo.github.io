import React from "react";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography";
import { L } from "../utils";

const content = (node: PostNode, type?: string) =>
  type === "theater" ? (
    <p>{node.frontmatter.source}</p>
  ) : type === "external" ? (
    <p>
      <i>{node.fields.note}</i>
    </p>
  ) : type === "poetry" ? (
    <p>{node.frontmatter.description}</p>
  ) : (
    <p dangerouslySetInnerHTML={{ __html: node.excerpt as TrustedHTML }} />
  );

export interface PostNode {
  frontmatter: {
    title: string;
    date: string;
    source?: string;
    description?: string;
  };
  fields: {
    slug: string;
    external?: boolean;
    note?: string;
  };
  excerpt?: string | TrustedHTML;
}

export default function PostExcerpt({ node, type }: { node: PostNode; type?: string }) {
  const title = node.frontmatter.title || node.fields.slug;
  return (
    <div key={node.fields.slug}>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        {node.fields.external ? (
          <L style={{ boxShadow: `none` }} to={node.fields.slug}>
            {title}
          </L>
        ) : (
          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            {title}
          </Link>
        )}
        {type === "external" && "\u{1f855}"}
      </h3>
      <small>{node.frontmatter.date}</small>
      {content(node, type)}
    </div>
  );
}

export interface PostEdge {
  node: PostNode;
  type?: string;
}
