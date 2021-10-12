import React from "react";
import { Text } from "@chakra-ui/layout";

const Description = (props) => {
  const { description } = props;

  return <Text>{description}</Text>;
};

export default Description;
