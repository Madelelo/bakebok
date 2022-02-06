import React from "react";
import Instruction from "./Instruction";
import { Box, Text, Divider } from "@chakra-ui/react";

const Instructions = (props) => {
  const { instructions } = props;

  if (!instructions) {
    return null;
  }

  return (
    <>
      <Box>
        <Text textStyle="h3"> Instruksjoner:</Text>
        <Divider
          orientation="horizontal"
          p={1}
          color="yellow"
          borderBottomWidth="2px"
        />

        {instructions.map((instruction) => (
          <Instruction key={instruction._id} instruction={instruction} />
        ))}
      </Box>
    </>
  );
};

export default Instructions;
