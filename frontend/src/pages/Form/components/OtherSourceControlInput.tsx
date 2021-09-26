import React from "react";
import FormInput from "./FormInput";
import FormControlButtons from "./FormControlButtons";

const OtherSourceControlInput = ({
  otherFavSourceControlTool,
  setOtherFavSourceControlTool,
  stage,
  setStage,
}: {
  otherFavSourceControlTool: string,
  setOtherFavSourceControlTool: React.Dispatch<React.SetStateAction<string>>,
  stage: number;
  setStage: React.Dispatch<React.SetStateAction<number>>;
}) => (
  <div>
    <p>You selected "other", please type your favourite source control tool</p>
    <FormInput
      placeholder="Type here..."
      key="otherFavSourceControlTool"
      value={otherFavSourceControlTool}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setOtherFavSourceControlTool(e.target.value)
      }
    />
    <FormControlButtons setStage={setStage} stage={stage} isDisabled={!otherFavSourceControlTool} />
  </div>
);

export default OtherSourceControlInput;
