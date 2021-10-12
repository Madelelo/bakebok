import React from "react";
import { Text } from "@chakra-ui/layout";

const Cooktime = (props) => {
  const { cooktime } = props;
  return <Text>{cooktime}</Text>;
};

export default Cooktime;
