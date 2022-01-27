import React from "react";
import { Box } from "@chakra-ui/layout";

const Oven = (props) => {
  const { oven } = props;

  if (!oven) {
    return null;
  }

  return <Box> Type ovn: {oven}</Box>;
};

export default Oven;
