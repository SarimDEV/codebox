import React, { SyntheticEvent } from "react";
import { Select } from "semantic-ui-react";
import FormControlButtons from "./FormControlButtons";

const favSourceControlOptions = [
  { key: "github", value: "github", text: "Github" },
  { key: "gitlab", value: "gitlab", text: "Gitlab" },
  { key: "tfs", value: "tfs", text: "TFS" },
  { key: "other", value: "other", text: "Other" },
];

const FavSourceControlSelect = ({
  favSourceControlTool,
  setFavSourceControlTool,
  stage,
  setStage,
}: {
  favSourceControlTool: string,
  setFavSourceControlTool: React.Dispatch<React.SetStateAction<string>>,
  stage: number;
  setStage: React.Dispatch<React.SetStateAction<number>>;
}) => (
  <div>
    <p>What is your favourite source control tool?</p>
    <Select
      placeholder="Select your favourite source control tool"
      options={favSourceControlOptions}
      value={favSourceControlTool}
      onChange={(event: SyntheticEvent<HTMLElement>, {value}) => {
        if(typeof value === 'string') {
          setFavSourceControlTool(value)
        }
      }}

    />
    <FormControlButtons setStage={setStage} stage={stage} incrementer={favSourceControlTool === 'other' ? 1 : 2} isDisabled={!favSourceControlTool} />
  </div>
);

export default FavSourceControlSelect;
