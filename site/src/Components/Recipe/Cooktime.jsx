import React from "react";
import { Box } from "@chakra-ui/layout";

const Cooktime = (props) => {
  const { cooktime } = props;

  if (!cooktime) {
    return null;
  }

  return <Box>Tid i ovn: {cooktime} minutter</Box>;
};

export default Cooktime;
