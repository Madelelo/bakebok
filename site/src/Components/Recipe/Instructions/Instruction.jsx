import React from "react";
import { Flex, Box } from "@chakra-ui/layout";

const Instruction = (props) => {
  const { instruction } = props;

  if (!instruction) {
    return null;
  }

  return (
    <Flex spacing="10px">
      <Box p="1" textStyle="body">
        {instruction.name}
      </Box>
    </Flex>
  );
};
export default Instruction;
