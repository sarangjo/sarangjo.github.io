import { PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import { L } from "../utils";

const Links = {
  uw: "https://cs.uw.edu",
  uchicago: "https://cs.uchicago.edu/",
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
const quarterMap = {
  wi: "Winter",
  sp: "Spring",
  au: "Fall",
};
const start = { q: 1, y: 15 };
const classNames = {
  143: "Intro to Computer Science II",
  311: "Foundations of Computing I",
  351: "Hardware/Software Interface",
  451: "Operating Systems",
  452: "Distributed Systems",
};

export default function AcademiaPage(props: PageProps) {
  return (
    <Layout
      location={props.location}
      title="Academia"
      description={`"SIS, Stay in School, 'cause it's the best"`}
    >
      <h2>
        University of Chicago (2023-?){" "}
        <L style={{ boxShadow: "none", lineHeight: "45px" }} to={Links.uw}>
          <StaticImage
            style={{ marginBottom: 0, maxHeight: 45 }}
            src="../images/uchicagocs.png"
            height={45}
            alt="cse"
          />
        </L>
      </h2>
      <p>
        I'm pursuing my PhD at UChicago CS starting Fall 2023. I'll update this
        section as more things start happening!
      </p>
      <h2>
        University of Washington (2014-18){" "}
        <L style={{ boxShadow: "none", lineHeight: "45px" }} to={Links.uw}>
          <StaticImage
            style={{ marginBottom: 0, maxHeight: 45 }}
            src="../images/uwcse.png"
            height={45}
            alt="cse"
          />
        </L>
      </h2>
      <h3>Research</h3>
      <p>
        In my senior year at UW, for my CSE Departmental Honors, I conducted
        research for the{" "}
        <L to={Links.misl}>Molecular Information Systems Lab</L>, on the{" "}
        <L to={Links.fluidics}>Microfluidic Automation</L> project. I wrote a{" "}
        <L to={Links.thesis}>thesis</L> and gave a{" "}
        <L to={Links.presentation}> presentation</L> at the end of my year with
        MISL.
      </p>
      <h3>Teaching</h3>
      <p>
        I had the privilege of being a TA for 10 of my 12 quarters at UW CSE:
      </p>
      <ul>
        {Taing.map((classNumber, idx) => {
          // Calculate the current quarter
          const thisIndex = idx + start.q;

          // How much have we overflowed?
          const overflowYears = Math.floor(thisIndex / 3);

          // That gives us the current year
          const thisYear = start.y + overflowYears;

          // Finally we get the quarter
          const thisQuarter = thisIndex % 3;
          const quarterShort = Object.keys(quarterMap)[thisQuarter];
          const quarterName = quarterMap[quarterShort];

          return (
            <li>
              {quarterName} 20{thisYear}:{" "}
              <a
                href={`https://courses.cs.washington.edu/courses/cse${classNumber}/${thisYear}${quarterShort}`}
              >
                CSE {classNumber}, {classNames[classNumber]}
              </a>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
