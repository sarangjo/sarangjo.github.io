import React from "react";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import { L } from "../utils";

import "./projects.css";

const labelToTitle = type => {
  switch (type) {
  case "uw":
    return "UW";
  case "asa":
    return "ASA";
  case "kinspire":
    return "Kinspire";
  default:
    return "";
  }
};

const Label = ({ type }) => (
  <span className={`label ${type}`}>{labelToTitle(type)}</span>
);
Label.propTypes = {
  type: PropTypes.string.required,
};

class ProjectsPage extends React.Component {
  completed() {
    return (
      <>
        <h3>Minimum Viable Product</h3>
        <ul>
          <li>
            <L to="https://sarangjo.github.io/cse351-heap/">
              CSE 351 Heap Simulator
            </L>
          </li>
          <li>
            Paper Telephone (
            <L to="https://github.com/sarangjo/paper-telephone">source code</L>)
            <Label type="uw" />
          </li>
          <li>
            <L to="https://kinspire.org/">Kinspire Website</L>
            <Label type="kinspire" />
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
            <L to="https://github.com/sarangjo/asa-judging">source code</L>)
            <Label type="asa" />
          </li>
          <li>
            <L to="https://sarangjo.github.io/formations/public/">Formations</L>
          </li>
          <li>Doc Scheduler</li>
          <li>LightRunner</li>
          <li>Radio Transceiver</li>
          <li>IonoWumpus</li>
        </ul>
        <h3>Early Exploration</h3>
        <ul>
          <li>
            YahtzeePC (
            <L to="https://github.com/sarangjo/yahtzeepc/">source code</L>)
          </li>
          <li>LOGO projects</li>
        </ul>
      </>
    );
  }

  inProgress() {
    return (
      <>
        {" "}
        <h3>In progress</h3>
        <ul>
          <li>
            <L to="https://sarangjo.github.io/rlesports-viz">
              Rocket League eSports visualization (
              <L to="https://github.com/sarangjo/rlesports-viz">source code</L>)
            </L>
          </li>
          <li>
            Kinspire Portal (
            <L to="https://github.com/kinspire/kinspire-portal">source code</L>)
            <Label type="kinspire" />
          </li>
          <li>
            <L to="https://ekta.app/">Ekta: The Desi Common Portal</L>
            <Label type="asa" />
          </li>
          <li>SS Soundboard</li>
          <li>Couch game simulation</li>
          <li>When2meet for mobile devices</li>
          <li>Poll Everywhere notifier</li>
          <li>
            UW CSE Courses visualization <span className="label uw">UW</span>
          </li>
          <li>
            UW Calendar (who knows when this will actually be completed){" "}
            <Label type="uw" />
          </li>
        </ul>
      </>
    );
  }

  render() {
    return (
      <Layout
        location={this.props.location}
        title="Projects"
        description="What else would companies look at to hire me?"
      >
        <h2>
          Projects{" "}
          <L to="https://github.com/sarangjo">
            <img className="github-logo" src="/images/github.png" />
          </L>
        </h2>
        {this.completed()}
        {this.inProgress()}
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
}

ProjectsPage.propTypes = {
  location: PropTypes.object,
};

export default ProjectsPage;
