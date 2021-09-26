import React from "react";
import { Button, SemanticCOLORS } from "semantic-ui-react";

const FormButton = ({
  content,
  color,
  onClick,
  icon,
}: {
  content: string;
  color: SemanticCOLORS;
  onClick?: any;
  icon?: string;
}) => {
  return (
    <Button
      content={content}
      icon={icon}
      labelPosition="right"
      color={color}
      onClick={onClick}
    />
  );
};

export default FormButton;
