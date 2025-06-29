import { PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import { L } from "../utils";

const Links = {
  uw: "https://cs.uw.edu",
  uchicago: "https://cs.uchicago.edu/people/sarang-joshi/",
  misl: "https://misl.cs.washington.edu/",
  fluidics: "https://misl.cs.washington.edu/projects/fluidics.html",
  thesis: "/papers/uw-thesis.pdf",
  presentation:
    "https://docs.google.com/presentation/d/e/2PACX-1vRuce7h-qTiSWLqWiQV-dWiqu8P5Qqd48mvFM15-2wApVB8qFY9MM4blEn7iGN4xJm_u4DD4DEbJhl2/pub?start=false&loop=false&delayms=3000",
  puddle: "https://dl.acm.org/doi/abs/10.1145/3297858.3304027",
  fred: "https://people.cs.uchicago.edu/~ftchong/",
  diana: "https://people.cs.uchicago.edu/~dmfranklin/",
  swiper: "https://doi.org/10.1145/3695053.3731022",
  andrew: "https://people.cs.uchicago.edu/~aachien/lssg/people/andrew-chien/",
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

const Me = () => <span style={{ backgroundColor: "skyblue" }}>Sarang Joshi</span>;

export default function AcademiaPage(props: PageProps) {
  return (
    <Layout
      location={props.location}
      title="Academia"
      description={`"No brain, no gain. Stay in school." - Michael Jordan`}
    >
      <h2>
        University of Chicago (2023-?){" "}
        <L style={{ boxShadow: "none", lineHeight: "45px" }} to={Links.uchicago}>
          <StaticImage
            style={{ marginBottom: 0, maxHeight: 45 }}
            src="../logos/uchicagocs.png"
            height={45}
            alt="cse"
          />
        </L>
      </h2>
      <h3>Research</h3>
      <p>
        I'm currently doing research in quantum computer architecture and quantum computer education
        with <L to={Links.fred}>Fred Chong</L> and <L to={Links.diana}>Diana Franklin</L>. I
        previously worked on a small project in sustainable computing research with{" "}
        <L to={Links.andrew}>Andrew Chien</L> as part of the LSSG group.
      </p>
      <ul>
        <li>
          <b>
            SWIPER: Minimizing Fault-Tolerant Quantum Program Latency via Speculative Window
            Decoding
          </b>
          . Joshua Viszlai, Jason D. Chadwick, <Me />, Gokul Subramanian Ravi, Yanjing Li, and
          Frederic T. Chong. <i>June 2025</i>. (
          <L to={Links.swiper}>ACM Digital Library, ISCA 2025</L>)
        </li>
      </ul>
      <h3>Teaching</h3>
      <p>I have TA'd for the following classes during my time at UChicago CS:</p>
      <ul>
        <li>Fall 2023: CMSC 144, Systems Programming II</li>
      </ul>
      <h2>
        University of Washington (2014-18){" "}
        <L style={{ boxShadow: "none", lineHeight: "45px" }} to={Links.uw}>
          <StaticImage
            style={{ marginBottom: 0, maxHeight: 45 }}
            src="../logos/uwcse.png"
            height={45}
            alt="cse"
          />
        </L>
      </h2>
      <h3>Research</h3>
      <p>
        In my senior year at UW, for my CSE Departmental Honors, I conducted research for the{" "}
        <L to={Links.misl}>Molecular Information Systems Lab</L>, on the{" "}
        <L to={Links.fluidics}>Microfluidic Automation</L> project. I wrote a{" "}
        <L to={Links.thesis}>thesis</L> and gave a <L to={Links.presentation}> presentation</L> at
        the end of my year with MISL.
      </p>
      <ul>
        <li>
          <b>Puddle: A Dynamic, Error-Correcting, Full-Stack Microfluidics Platform</b>. Max
          Willsey, Ashley P. Stephenson, Chris Takahashi, Pranav Vaid, Bichlien H. Nguyen, Michal
          Piszczek, Christine Betts, Sharon Newman, <Me />, Karin Strauss, Luis Ceze.{" "}
          <i>April 2019</i>. (<L to={Links.puddle}>ACM Digital Library, ASPLOS 2019</L>)
        </li>
        <li>
          <b>Making the Invisible, Visible (Poster presentation)</b>. Kavya Magham, <Me />, Jeannine
          Rogel. <i>May 2017</i>. (
          <L to="/static/marygatesposter.jpg">
            Mary Gates Leadership Scholarship Poster Session, University of Washington
          </L>
          )
        </li>
      </ul>
      <h3>Teaching</h3>
      <p>I had the privilege of being a TA for 10 of my 12 quarters at UW CSE:</p>
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
