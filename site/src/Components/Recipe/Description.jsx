import React from "react";
import { Container } from "@chakra-ui/layout";
import { Text, Box } from "@chakra-ui/react";

const Description = (props) => {
  const { description } = props;

  if (!description) {
    return null;
  }

  return (
    <Box>
      <Text textStyle="byline">{description}</Text>
    </Box>
  );
};

export default Description;
