import React from "react";
import { graphql, Link } from "gatsby";
import get from "lodash/get";
import { L } from "../utils";
import PropTypes from "prop-types";

import Layout from "../components/layout";

const LINKS = [
  "https://illumio.com",
  "https://uw.edu",
  "https://cs.uw.edu",
  "https://www.youtube.com/playlist?list=PLB0785C00EA91F358",
  "https://www.youtube.com/playlist?list=PLHGainiu-yeQDDL-MlGiJxLC_ayim-aEg",
  "https://github.com/sarangjo",
];

class Index extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const siteDescription = get(
      this,
      "props.data.site.siteMetadata.description"
    );

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        description={siteDescription}
        showBio={true}
      >
        <p>
          Hi there! I&apos;m Sarang Joshi, a software developer, singer, and
          life enthusiast working at <L to={LINKS[0]}>Illumio</L> in Sunnyvale,
          CA. I graduated cum laude from the{" "}
          <L to={LINKS[1]}>University of Washington, Seattle</L>, with a B.S. in{" "}
          <L to={LINKS[2]}>Computer Science</L> with Honors.
        </p>
        <p>
          Outside of work, I like to <L to={LINKS[3]}>sing</L>,{" "}
          <Link to="/blog">write</Link>, <L to={LINKS[4]}>play video games</L>,{" "}
          <L to={LINKS[5]}>program</L>, and travel when I can. You&apos;ll find
          most of my work on this website, so feel free to explore!
        </p>
      </Layout>
    );
  }
}

Index.propTypes = {
  location: PropTypes.object,
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
