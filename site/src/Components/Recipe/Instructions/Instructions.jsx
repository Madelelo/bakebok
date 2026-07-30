import React from "react";
import Instruction from "./Instruction";
import { Box, Text, Divider } from "@chakra-ui/react";

const Instructions = (props) => {
  const { instructions } = props;

  if (!instructions) {
    return null;
  }

  return (
    <Box maxW="70ch" mx="auto">
      <Text textStyle="h3">Instruksjoner:</Text>
      <Divider
        orientation="horizontal"
        borderColor="yellow"
        color="yellow"
        borderBottomWidth="2px"
        paddingBottom="2"
      />

      {instructions.map((instruction, index) => (
        <Instruction
          key={instruction._key || instruction._id || index}
          instruction={instruction}
          number={index + 1}
          isLast={index === instructions.length - 1}
        />
      ))}
    </Box>
  );
};

export default Instructions;
