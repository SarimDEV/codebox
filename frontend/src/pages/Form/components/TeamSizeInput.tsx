import FormControlButtons from "./FormControlButtons";
import FormInput from "./FormInput";

const TeamSizeInput = ({
  teamSize,
  setTeamSize,
  setStage,
  stage,
  onSubmit,
  isLoading,
}: {
  teamSize: number;
  setTeamSize: React.Dispatch<React.SetStateAction<number>>;
  stage: number;
  setStage: React.Dispatch<React.SetStateAction<number>>;
  onSubmit: () => void;
  isLoading: boolean;
}) => (
  <div>
    <p>Finally, what is the size of your team?</p>
    <FormInput
      key="email"
      type="number"
      value={teamSize.toString()}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.target.value);
        if (value < 1) value = 1;
        setTeamSize(value);
      }}
    />
    <FormControlButtons
      setStage={setStage}
      stage={stage}
      decrementer={2}
      isLoading={isLoading}
      submit={true}
      onSubmit={onSubmit}
    />
  </div>
);

export default TeamSizeInput;
