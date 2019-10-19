import * as React from "react";
import PropTypes from "prop-types";

// Helper component for a link out of the home page in a new tab
export const L = ({ to, children }) => (
  <a href={to} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);
L.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
