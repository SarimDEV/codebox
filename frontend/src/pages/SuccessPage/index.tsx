import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const SuccessPage = () => {
  return (
    <div>
      <h1>Thank you</h1>
      <p>A confirmation will be sent to your email, we will get back to you as soon as possible!</p>
      <Link to="/">
        <Button
          content="Home"
          icon="home"
          labelPosition="right"
          color="blue"
        />
      </Link>
    </div>
  );
};

export default SuccessPage;