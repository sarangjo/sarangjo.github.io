import { PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import { L } from "../components/link";

const Links = {
  uw: "https://cs.uw.edu",
  uchicago: "https://cs.uchicago.edu/people/sarang-joshi/",
  teals: "https://www.microsoft.com/en-us/teals",
  bobbandes: "https://www.cs.washington.edu/academics/teaching-assistants/bob-bandes-award/",
};

// UW TAing
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
type QuarterType = keyof typeof quarterMap;
const start = { q: 1, y: 15 };
const classNames = {
  143: "Intro to Computer Science II",
  311: "Foundations of Computing I",
  351: "Hardware/Software Interface",
  451: "Operating Systems",
  452: "Distributed Systems",
};
type ClassNumber = keyof typeof classNames;

export default function TeachingPage(props: PageProps) {
  return (
    <Layout
      location={props.location}
      title="Teaching"
      description="Please give me a 5-star rating on RateMyProfessor, thanks."
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
      <p>I was the Teacher of Record for the following classes during my time at UChicago CS:</p>
      <ul>
        <li>
          Summer Session 2026: CMSC 19928-30, <b>Quantum Computing: An Introduction</b>{" "}
          <i>(pre-college course)</i>
        </li>
      </ul>
      <p>I have also TA'd for the following classes during my time at UChicago CS:</p>
      <ul>
        <li>
          Winter 2026: CMSC 22880, <b>Introduction to Quantum Computing</b>
        </li>
        <li>
          Fall 2023: CMSC 14400, <b>Systems Programming II</b>
        </li>
      </ul>
      <h2>Volunteer Teaching</h2>
      <p>
        I volunteered as a computer science teacher for <L to={Links.teals}>TEALS</L> for the
        academic year 2021–2022 at North Shore High School in Houston, TX, for the{" "}
        <b>Intro to Computer Science</b> course.
      </p>
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
      <p>
        I had the privilege of being a TA for 10 of my 12 quarters at UW CSE (links require a UW
        NetID). I received an honorable mention for the{" "}
        <L to={Links.bobbandes}>Bob Bandes Memorial Award</L>, awarded for exceptional performance
        by teaching assistants in the Computer Science department.
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
          const quarterShort = Object.keys(quarterMap)[thisQuarter] as QuarterType;
          const quarterName = quarterMap[quarterShort];

          return (
            <li>
              {quarterName} 20{thisYear}:{" "}
              <L
                to={`https://courses.cs.washington.edu/courses/cse${classNumber}/${thisYear}${quarterShort}`}
              >
                CSE {classNumber}, <b>{classNames[classNumber as ClassNumber]}</b>
              </L>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
