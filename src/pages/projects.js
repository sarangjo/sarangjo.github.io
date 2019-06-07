import React from "react";
import PropTypes from "prop-types";

import Layout from "../components/layout";

class ProjectsPage extends React.Component {
  render() {
    return (
      <Layout
        location={this.props.location}
        title="Projects"
        description="How else would companies hire me?"
      >
        <h2>Projects</h2>
        <ul>
          <li>CSE 351 simulator</li>
          <li>Paper Telephone</li>
          <li>Formations</li>
          <li>Doc Scheduler</li>
          <li>LightRunner</li>
          <li>Radio Transceiver</li>
          <li>IonoWumpus</li>
          <li>YahtzeePC</li>
          <li>LOGO projects</li>
        </ul>
        <h2>In progress</h2>
        <ul>
          <li>Rocket League eSports visualization</li>
          <li>SS Soundboard</li>
          <li>Couch game simulation</li>
          <li>When2meet for mobile devices</li>
          <li>Poll Everywhere notifier</li>
          <li>UW CSE Courses visualization</li>
          <li>UW Calendar (who knows when this will actually be completed</li>
        </ul>
        <h2>Open source contributions</h2>
        <ul>
          <li>gatsby-transformer-fountain</li>
          <li>Atom symbols-tree-view</li>
        </ul>
      </Layout>
    );
  }
}

ProjectsPage.propTypes = {
  location: PropTypes.object,
};

export default ProjectsPage;
