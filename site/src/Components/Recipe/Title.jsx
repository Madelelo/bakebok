import React from "react";
import { Text } from "@chakra-ui/react";

const Title = (props) => {
  const { title } = props;

  return <Text textStyle="h2"> {title}</Text>;
};

export default Title;
