import React from "react";
import Layout from "../components/layout";
import { PageProps } from "gatsby";

export default function MusicPage(props: PageProps) {
  return (
    <Layout
      location={props.location}
      title="Contact"
      description="Always happy to get in touch with my fans, of whom there are certainly many."
    >
      <h2>Email</h2>
      <p>
        My email address starts with <code>sarangj</code>.
        <ul>
          <li>
            For anything to do with my research or teaching, use the domain{" "}
            <code>@uchicago.edu</code>.
          </li>
          <li>
            For music, personal projects, or anything else, use the domain <code>@msn.com</code>.
          </li>
        </ul>
      </p>
    </Layout>
  );
}
