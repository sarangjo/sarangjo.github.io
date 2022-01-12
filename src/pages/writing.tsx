import React from "react";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import { L } from "../utils";

import "./projects.css";
import { PageProps } from "gatsby";

export default function WritingPage({ location }: PageProps<any>) {
  return (
    <Layout
      location={location}
      title="Writing"
      description="Miscellaneous thoughts about the world."
    >
      <ul>
        <li>
          <L to="https://ani-sarang.medium.com/climate-change-in-america-a-defining-crisis-of-our-century-75e959f850d5">
            Climate Change in America: A Defining Crisis of Our Century
          </L>
          , January 2021. Co-Authored with Anirudh Ramanathan
        </li>
      </ul>
    </Layout>
  );
}
