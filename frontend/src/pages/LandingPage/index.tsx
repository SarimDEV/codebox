import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const LandingPage = () => {
  return (
    <header className="App-header">
      <h1>Welcome to CodeBox</h1>
      <p>Please help us by answering this short questionnaire</p>
      <Link to="/form">
        <Button
          content="Start"
          icon="right arrow"
          labelPosition="right"
          color="blue"
        />
      </Link>
    </header>
  );
};

export default LandingPage;
