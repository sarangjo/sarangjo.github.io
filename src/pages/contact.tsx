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
      <h2>Professional Email</h2>
      <p>
        Please reach out at <code>sarangj</code> at <code>uchicago.edu</code>.
      </p>
      <h2>Music Email</h2>
      <p>
        Please reach out at <code>music</code> at <code>sarangj.com</code>.
      </p>
      <h2>General Email</h2>
      <p>
        For anything else, please reach out at <code>mail</code> at <code>sarangj.com</code>.
      </p>
    </Layout>
  );
}
