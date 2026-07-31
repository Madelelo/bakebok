import React from "react";
import { Text, Box } from "@chakra-ui/react";

const Description = (props) => {
  const { description } = props;

  if (!description) {
    return null;
  }

  return (
    <Box py={{ base: 2, md: 3 }}>
      <Text fontSize="14px" lineHeight="1.5">{description}</Text>
    </Box>
  );
};

export default Description;
