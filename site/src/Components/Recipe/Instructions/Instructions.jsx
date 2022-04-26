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
          borderColor="yellow"
          borderBottomWidth="2px"
          paddingBottom="2"
        />

        {instructions.map((instruction) => (
          <Instruction key={instruction._id} instruction={instruction} />
        ))}
      </Box>
    </>
  );
};

export default Instructions;
