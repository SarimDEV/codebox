import React from "react";
import FormInput from "./FormInput";
import FormControlButtons from "./FormControlButtons";

function isValidEmail(email: string) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const EmailInput = ({
  name,
  email,
  setEmail,
  setStage,
  stage,
}: {
  name: string;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  stage: number;
  setStage: React.Dispatch<React.SetStateAction<number>>;
}) => (
  <div>
    <p>Thank you {name}, what is your email?</p>
    <FormInput
      placeholder="Type email here..."
      key="email"
      value={email}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value)
      }
    />
    <FormControlButtons
      setStage={setStage}
      stage={stage}
      isDisabled={!email || !isValidEmail(email)}
    />
  </div>
);

export default EmailInput;
