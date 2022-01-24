import React from "react";
import { Text } from "@chakra-ui/layout";

const Title = (props) => {
  const { title } = props;

  if (!title) {
    return null;
  }

  return <Text>{title}</Text>;
};

export default Title;
