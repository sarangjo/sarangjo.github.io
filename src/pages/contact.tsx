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
      <ul>
        <li>
          For any professional/academic communications, you can reach me at <code>sarangj</code> at{" "}
          <code>uchicago.edu</code>.
        </li>
        <li>
          For everything music, send me an email at <code>music</code> at <code>sarangj.com</code>.
        </li>
        <li>
          For anything else, there's always <code>mail</code> at <code>sarangj.com</code>.
        </li>
      </ul>
    </Layout>
  );
}
