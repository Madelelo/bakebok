import React from "react";
import Instruction from "./Instruction";

const Instructions = (props) => {
  const { instructions } = props;

  return (
    <>
      {instructions.map((instruction, index) => (
        <Instruction key={instruction + index} instruction={instruction} />
      ))}
    </>
  );
};

export default Instructions;
