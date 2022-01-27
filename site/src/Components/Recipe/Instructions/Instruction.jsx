import React from "react";
import { Text } from "@chakra-ui/layout";

const Instruction = (props) => {
  const { instruction } = props;

  if (!instruction) {
    return null;
  }

  return <Text>{instruction.name}</Text>;
};

export default Instruction;
