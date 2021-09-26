import React, { useState } from "react";
import NameInput from "./components/NameInput";
import EmailInput from "./components/EmailInput";
import FavSourceControlSelect from "./components/FavSourceControlSelect";
import TeamSizeInput from "./components/TeamSizeInput";
import OtherSourceControlInput from "./components/OtherSourceControlInput";
import { useHistory } from "react-router-dom";

const Form = () => {
  const [stage, setStage] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [favSourceControlTool, setFavSourceControlTool] = useState("");
  const [otherFavSourceControlTool, setOtherFavSourceControlTool] =
    useState("");
  const [teamSize, setTeamSize] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  let history = useHistory();

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      await fetch("http://localhost:3001/landing-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          favSourceControlTool:
            favSourceControlTool === "other"
              ? otherFavSourceControlTool
              : favSourceControlTool,
          teamSize,
        }),
      });
      history.push("/success");
    } catch (err) {
      console.log(err);
      setError("Unable to submit form")
    }
    setIsLoading(false);
  };

  const renderStage = () => {
    switch (stage) {
      case 0:
        return (
          <NameInput
            name={name}
            setName={setName}
            stage={stage}
            setStage={setStage}
          />
        );
      case 1:
        return (
          <EmailInput
            name={name}
            email={email}
            setEmail={setEmail}
            stage={stage}
            setStage={setStage}
          />
        );
      case 2:
        return (
          <FavSourceControlSelect
            favSourceControlTool={favSourceControlTool}
            setFavSourceControlTool={setFavSourceControlTool}
            stage={stage}
            setStage={setStage}
          />
        );
      case 3:
        return (
          <OtherSourceControlInput
            otherFavSourceControlTool={otherFavSourceControlTool}
            setOtherFavSourceControlTool={setOtherFavSourceControlTool}
            stage={stage}
            setStage={setStage}
          />
        );
      case 4:
        return (
          <TeamSizeInput
            teamSize={teamSize}
            setTeamSize={setTeamSize}
            stage={stage}
            setStage={setStage}
            onSubmit={() => onSubmit()}
            isLoading={isLoading}
          />
        );
    }
  };

  const renderError = () => {
    if (error) {
      return (<div>{error}</div>);
    }
  }

  return (
    <div>
      <h1>CodeBox</h1>
      {renderStage()}
      {renderError()}
    </div>
  );
};

export default Form;
