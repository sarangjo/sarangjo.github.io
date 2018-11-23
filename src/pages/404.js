import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    );
  }
}

NotFoundPage.propTypes = {
  location: PropTypes.obj,
};

export default NotFoundPage;
