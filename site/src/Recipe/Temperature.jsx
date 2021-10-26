import React from "react";
import { Text } from "@chakra-ui/layout";

const Temperature = (props) => {
  const { temperature } = props;

  return (
    <Text>
      {temperature?.value} {temperature?.unit}
    </Text>
  );
};

export default Temperature;
