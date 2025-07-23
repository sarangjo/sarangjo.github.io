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
  const featured = () => (
    <>
      <ul>
        <li>
          <L to="https://about.ekta.app/">Ekta: The Desi Common Portal</L> (active development)
        </li>
        <li>
          <L to="https://courses.cs.washington.edu/courses/cse351/heapsim/">
            CSE 351 Heap Simulator
          </L>{" "}
          <Label type="uw" />
        </li>
        <li>
          <L to="https://sarangj.com/rlesports">Rocket League eSports visualization</L>,{" "}
          <i>work in progress</i> (<L to="https://github.com/sarangjo/rlesports">source code</L>)
        </li>
        <li>
          ASA Score Checker and Reporter (
          <L to="https://github.com/desiacappella/operations">source code</L>)
          <Label type="asa" />
        </li>
        <li>
          Paper Telephone (<L to="https://github.com/sarangjo/paper-telephone">source code</L>)
          <Label type="uw" />
        </li>
        <li>
          <L to="https://sarangjo.github.io/formations/public/">Formations</L>: a simple visualizer
          for group dance formations (<L to="https://github.com/sarangjo/formations">source code</L>
          ) <Label type="uw" />
        </li>
      </ul>
    </>
  );

  const scripts = () => (
    <>
      <h2>Scripts</h2>
      <ul>
        <li>
          <code>rot.rs</code> (
          <L to="https://gist.github.com/sarangjo/723dd150f931d752a6b76a505f6f5cb9">source code</L>)
        </li>
        <li>
          Transposer for UW Awaaz sheet music (
          <L to="https://github.com/sarangjo/awaaz-parser">source code</L>)
          <Label type="uw" />
        </li>
      </ul>
    </>
  );

  const highSchool = () => (
    <>
      <h2>High School</h2>
      <ul>
        <li>
          LightRunner: a summer project from StudentRND Labs (
          <L to="https://github.com/sarangjo/lightrunner">source code</L>)
        </li>
        <li>
          Doc Scheduler: a prototype for an app to help doctors in India schedule appointments
          across multiple locations (
          <L to="https://github.com/sarangjo/docscheduler">source code</L>)
        </li>
        <li>
          Radio Transceiver: my final project for Computer Science and Engineering at RHS (
          <L to="https://github.com/sarangjo/radiotransceiver">source code</L>
          ) <Label type="rhs" />
        </li>
        <li>
          IonoWumpus: winner of the Unlimited Category at Hunt the Wumpus 2012 (
          <L to="https://github.com/sarangjo/IonoWumpus">source code</L>) <Label type="rhs" />
        </li>
        <li>
          YahtzeePC (<L to="https://github.com/sarangjo/yahtzeepc/">source code</L>)
        </li>
      </ul>
    </>
  );

  const origins = () => (
    <>
      <h2>Origins</h2>
      <p>Where it all began...</p>
      <ul>
        <li>
          LOGO projects (<L to="https://github.com/sarangjo/logo-projects">source code</L>)
        </li>
        <li>
          <L to="https://scratch.mit.edu/users/sarangj/">Scratch projects</L>
          <ul>
            <li>
              <L to="https://scratch.mit.edu/projects/2486776/">Cannon Game</L>
            </li>
            <li>
              <L to="https://scratch.mit.edu/projects/1308659/">City Blocks</L>
            </li>
            <li>
              <L to="https://scratch.mit.edu/projects/1310348/">Graph</L>
            </li>
            <li>
              <L to="https://scratch.mit.edu/projects/862314/">Tennis</L> (it's Pong, really)
            </li>
          </ul>
        </li>
      </ul>
    </>
  );

  const openSource = () => (
    <>
      <h2>Open source contributions</h2>
      <ul>
        <li>
          Full-stack single-page <L to="https://www.typescriptlang.org/">Typescript</L> app template
          (<L to="https://github.com/sarangjo/full-stack-typescript-app">source code</L>)
        </li>
        <li>
          <L to="https://www.gatsbyjs.com/">Gatsby</L> <L to="https://fountain.io/">Fountain</L>{" "}
          transformer plugin{" "}
          <L to="https://www.npmjs.com/package/gatsby-transformer-fountain">
            gatsby-transformer-fountain
          </L>
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
            src="../logos/github.png"
            height={60}
            alt="gh"
          />
        </L>
      }
      description="What else would companies look at to hire me?"
    >
      {featured()}
      {openSource()}
      {scripts()}
      {highSchool()}
      {origins()}
    </Layout>
  );
}
