import React from "react";
import { Text } from "@chakra-ui/layout";

const Oven = (props) => {
  const { oven } = props;
  return <Text>{oven}</Text>;
};

export default Oven;
