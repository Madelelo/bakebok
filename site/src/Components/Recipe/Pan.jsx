import React from "react";
import { Text } from "@chakra-ui/layout";

const Pan = (props) => {
  const { pan } = props;

  if (!pan) {
    return null;
  }

  return (
    <Text>
      Form: {pan.shape} {pan.size_value} {pan.size_unit}
    </Text>
  );
};

export default Pan;
