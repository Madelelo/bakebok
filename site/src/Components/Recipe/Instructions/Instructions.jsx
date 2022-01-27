import React from "react";
import Instruction from "./Instruction";

const Instructions = (props) => {
  const { instructions } = props;

  if (!instructions) {
    return null;
  }

  return (
    <>
      {instructions.map((instruction) => (
        <Instruction key={instruction._id} instruction={instruction} />
      ))}
    </>
  );
};

export default Instructions;
