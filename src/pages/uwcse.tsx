import { PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import { L } from "../utils";

const Links = {
  cs: "https://cs.uw.edu",
  misl: "https://misl.cs.washington.edu/",
  fluidics: "https://misl.cs.washington.edu/projects/fluidics.html",
  thesis: "/papers/uw-thesis.pdf",
  presentation:
    "https://docs.google.com/presentation/d/e/2PACX-1vRuce7h-qTiSWLqWiQV-dWiqu8P5Qqd48mvFM15-2wApVB8qFY9MM4blEn7iGN4xJm_u4DD4DEbJhl2/pub?start=false&loop=false&delayms=3000",
};

// TODO use this
const Taing = [
  // freshman year
  143,
  // sophomore year
  143, 351, 351,
  // junior year
  311, 351, 451,
  // senior year
  451, 451, 452,
];
const start = ["sp", 15];
const quarterMap = {
  wi: "Winter",
  sp: "Spring",
  au: "Fall",
};

export default function UWCSEPage(props: PageProps) {
  return (
    <Layout
      location={props.location}
      title="UW Computer Science and Engineering"
      titleIcon={
        <L style={{ boxShadow: "none" }} to={Links.cs}>
          <StaticImage
            style={{ marginBottom: 0, maxHeight: 60 }}
            src="../images/uwcse.jpg"
            height={60}
            alt="uwcse"
          />
        </L>
      }
      description="The launching pad for a lifelong love."
    >
      <h2>Research</h2>
      <p>
        In my senior year at UW, for my CSE Departmental Honors, I conducted
        research for the{" "}
        <L to={Links.misl}>Molecular Information Systems Lab</L>, on the{" "}
        <L to={Links.fluidics}>Microfluidic Automation</L> project. I wrote a{" "}
        <L to={Links.thesis}>thesis</L> and gave a{" "}
        <L to={Links.presentation}> presentation</L> at the end of my year with
        MISL.
      </p>
      <h2>Teaching</h2>
      <p>
        I had the privilege of being a TA for 10 of my 12 quarters at UW CSE:
      </p>
      <ul>
        <li>Intro to Computer Science II (2 quarters)</li>
        <li>Hardware/Software Interface (3 quarters)</li>
        <li>Foundations of Computing I</li>
        <li>Operating Systems (3 quarters)</li>
        <li>Distributed Systems</li>
      </ul>
    </Layout>
  );
}
