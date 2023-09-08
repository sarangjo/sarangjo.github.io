import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import { L } from "../utils";

import "./projects.css";
import { PageProps } from "gatsby";

const labelToTitle = (type) => {
  switch (type) {
    case "uw":
      return "UW";
    case "asa":
      return "ASA";
    case "kinspire":
      return "Kinspire";
    case "rhs":
      return "RHS";
    default:
      return "";
  }
};

const Label = ({ type }: { type: string }) => (
  <span className={`label ${type}`}>{labelToTitle(type)}</span>
);

export default function ProjectsPage(props: PageProps) {
  const completed = () => (
    <>
      <ul>
        <li>
          <L to="https://ekta.app/">Ekta: The Desi Common Portal</L> (active
          development)
        </li>
        <li>
          <L to="https://courses.cs.washington.edu/courses/cse351/heapsim/">
            CSE 351 Heap Simulator
          </L>{" "}
          <Label type="uw" />
        </li>
        <li>
          Full-stack single-page Typescript app template (
          <L to="https://github.com/sarangjo/full-stack-typescript-app">
            source code
          </L>
          )
        </li>
        <li>
          Paper Telephone (
          <L to="https://github.com/sarangjo/paper-telephone">source code</L>)
          <Label type="uw" />
        </li>
        <li>
          <L to="https://chrome.google.com/webstore/detail/uw-awaaz-transposer/fjhhmdelhgjdjklocpgdoljjkneebcog">
            Transposer for UW Awaaz sheet music
          </L>{" "}
          (<L to="https://github.com/sarangjo/awaaz-parser">source code</L>)
          <Label type="uw" />
        </li>
        <li>
          ASA Score Checker and Reporter (
          <L to="https://github.com/desiacappella/operations">source code</L>)
          <Label type="asa" />
        </li>
        <li>
          <L to="https://sarangjo.github.io/formations/public/">Formations</L> (
          <L to="https://github.com/sarangjo/formations">source code</L>)
        </li>
      </ul>
    </>
  );

  const earlyDays = () => (
    <>
      <h2>From My Early Days</h2>
      <ul>
        <li>
          LightRunner &mdash; a summer project from StudentRND Labs (
          <L to="https://github.com/sarangjo/lightrunner">source code</L>)
        </li>
        <li>Doc Scheduler</li>
        <li>
          Radio Transceiver &mdash; my final project for Computer Science and
          Engineering at RHS (
          <L to="https://github.com/sarangjo/radiotransceiver">source code</L>
          ) <Label type="rhs" />
        </li>
        <li>
          IonoWumpus &mdash; winner of the Unlimited Category at Hunt the Wumpus
          2012 (<L to="https://github.com/sarangjo/IonoWumpus">source code</L>){" "}
          <Label type="rhs" />
        </li>
        <li>
          YahtzeePC (
          <L to="https://github.com/sarangjo/yahtzeepc/">source code</L>)
        </li>
        <li>
          LOGO projects (
          <L to="https://github.com/sarangjo/logo-projects">source code</L>)
        </li>
      </ul>
    </>
  );

  const inProgress = () => (
    <>
      <h2>Work in progress</h2>
      <ul>
        <li>
          <L to="https://rlesports.sarangj.com">
            Rocket League eSports visualization
          </L>{" "}
          (<L to="https://github.com/sarangjo/rlesports">source code</L>)
        </li>
        <li>
          Kinspire Portal (
          <L to="https://github.com/kinspire/kinspire-portal">source code</L>)
          <Label type="kinspire" />
        </li>
        <li>SS Soundboard</li>
        <li>Couch game simulation</li>
        <li>When2meet for mobile devices</li>
        <li>Poll Everywhere notifier</li>
        <li>
          UW CSE Courses visualization <span className="label uw">UW</span>
        </li>
        <li>
          UW Calendar <Label type="uw" />
        </li>
      </ul>
    </>
  );

  return (
    <Layout
      location={props.location}
      title="Projects"
      titleIcon={
        <L style={{ boxShadow: "none" }} to="https://github.com/sarangjo">
          <StaticImage
            style={{ marginBottom: 0, maxHeight: 60 }}
            src="../images/github.png"
            height={60}
            alt="gh"
          />
        </L>
      }
      description="What else would companies look at to hire me?"
    >
      {completed()}
      {inProgress()}
      {earlyDays()}
      <h2>Open source contributions</h2>
      <ul>
        <li>
          Gatsby plugin{" "}
          <L to="https://www.npmjs.com/package/gatsby-transformer-fountain">
            gatsby-transformer-fountain
          </L>
        </li>
      </ul>
    </Layout>
  );
}
