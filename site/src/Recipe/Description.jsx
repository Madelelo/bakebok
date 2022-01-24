import React from "react";
import { Text } from "@chakra-ui/layout";

const Description = (props) => {
  const { description } = props;

  if (!description) {
    return null;
  }

  return <Text>{description}</Text>;
};

export default Description;
