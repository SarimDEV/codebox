import React from "react";
import { Input } from "semantic-ui-react";

const InputExampleInput = ({
  placeholder,
  value,
  onChange,
  key,
  type = "text"
}: {
  placeholder?: string;
  value: string;
  onChange: any;
  key: string;
  type?: string;
}) => <Input focus key={key} type={type} placeholder={placeholder} value={value} onChange={onChange} />;

export default InputExampleInput;
