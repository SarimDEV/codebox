import React from "react";
import FormInput from './FormInput';
import FormControlButtons from "./FormControlButtons";

const NameInput = ({
  name,
  setName,
  setStage,
  stage,
}: {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  stage: number;
  setStage: React.Dispatch<React.SetStateAction<number>>;
}) => (
  <div>
    <p>Hello! What is your name?</p>
    <FormInput
      placeholder="Type name here..."
      value={name}
      key="name"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value)
      }
    />
    <FormControlButtons setStage={setStage} stage={stage} isDisabled={!name}/>
  </div>
);

export default NameInput