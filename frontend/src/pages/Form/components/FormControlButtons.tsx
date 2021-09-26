import React from "react";
import { FormButton } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const FormControlButtons = ({
  setStage,
  stage,
  incrementer = 1,
  decrementer = 1,
  submit = false,
  onSubmit,
  isLoading = false,
  isDisabled = false,
}: {
  setStage: React.Dispatch<React.SetStateAction<number>>;
  stage: number;
  incrementer?: number;
  decrementer?: number;
  submit?: boolean;
  onSubmit?: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
}) => {
  let history = useHistory();
  return (
    <div style={{ marginTop: 20, display: "flex", justifyContent: "center" }}>
      <FormButton
        content="prev"
        color="blue"
        size="huge"
        onClick={() => stage === 0 ? history.push('/') : setStage(stage - decrementer)}
      />
      {submit ? (
        <FormButton
          loading={isLoading}
          content="submit"
          color="blue"
          size="huge"
          onClick={onSubmit}
        />
      ) : (
        <FormButton
          content="next"
          color="blue"
          size="huge"
          disabled={isDisabled}
          onClick={() => setStage(stage + incrementer)}
        />
      )}
    </div>
  );
};

export default FormControlButtons;
