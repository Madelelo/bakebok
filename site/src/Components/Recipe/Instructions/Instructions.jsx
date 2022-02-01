import React from "react";
import Instruction from "./Instruction";
import { Box, Text } from "@chakra-ui/react";

const Instructions = (props) => {
  const { instructions } = props;

  if (!instructions) {
    return null;
  }

  return (
    <>
      <Box>
        <Text fontSize="xl"> Instruksjoner:</Text>

        {instructions.map((instruction) => (
          <Instruction key={instruction._id} instruction={instruction} />
        ))}
      </Box>
    </>
  );
};

export default Instructions;
