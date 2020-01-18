import React from "react";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import { L } from "../utils";

import "./projects.css";

const Label = ({ type }) => (
  <span className={`label ${type}`}>{labelToTitle(type)}</span>
);
Label.propTypes = {
  type: PropTypes.string.required,
};

class ProjectsPage extends React.Component {
  render() {
    return (
      <Layout
        location={this.props.location}
        title="Projects"
        description="What else would companies look at to hire me?"
      >
        <h2>Music</h2>
        <h3>High School and Before</h3>
        <ul>
          <li>
            <L to="https://www.youtube.com/watch?v=gjjT9nfSU5Y&list=PLB0785C00EA91F358&index=2">
              Gaaravaa (गारवा)
            </L>
          </li>
          <li>
            <L to="https://soundcloud.com/sarang-joshi/tu-hi-hakeekat">
              Tu Hi Hakeekat (तू ही हकीकत)
            </L>
          </li>
          <li>
            <L to="https://soundcloud.com/sarang-joshi/musafir-chalte-chalte">
              Musafir Chalte Chalte (मुसाफिर चलते चलते)
            </L>
          </li>
          <li>
            <L to="https://www.youtube.com/watch?v=KQERT1iXzg4&list=PLB0785C00EA91F358&index=3">
              Tya Phulanchya Gandhakoshi (त्या फुलांच्या गंधकोशी)
            </L>
          </li>
          <li>
            <L to="https://www.youtube.com/watch?v=wMnfi-He0Uc&list=PLB0785C00EA91F358&index=4">
              Farewell
            </L>{" "}
            circa 2011
          </li>
          <li>
            <L to="https://www.youtube.com/watch?v=oZjD6p00NQA&list=PLB0785C00EA91F358&index=5">
              Part of a Painting, <i>Edges</i>
            </L>{" "}
            circa 2012. Nominated for "Outstanding Performance by an Actor in a
            Featured Ensemble Role" at the{" "}
            <L to="https://www.5thavenue.org/images/pdfs/1213_5thAveAwards_Nominees_and_Recipients.pdf">
              2013 5th Avenue Awards
            </L>
          </li>
        </ul>
        <h3>Undergrad</h3>
        Most of my music was with UW Awaaz, here are some of my favorites.
        <h3>After Undergrad</h3>
        <h3>The Joshi Show</h3>
      </Layout>
    );
  }
}

ProjectsPage.propTypes = {
  location: PropTypes.object,
};

export default ProjectsPage;
