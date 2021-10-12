import React from "react";
import { Text } from "@chakra-ui/layout";

const Pan = (props) => {
  const { pan } = props;
  return (
    <Text>
      {pan.shape} {pan.size_value} {pan.size_unit}
    </Text>
  );
};

export default Pan;
