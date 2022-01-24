import React from "react";
import { Text } from "@chakra-ui/layout";

const Cooktime = (props) => {
  const { cooktime } = props;

  if (!cooktime) {
    return null;
  }

  return <Text>{cooktime}</Text>;
};

export default Cooktime;
