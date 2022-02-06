import React from "react";
import { Box } from "@chakra-ui/react";

const ButtonBox = (props) => {
  const { children } = props;

  return (
    <Box
      as="button"
      _hover={{ layerStyle: "blueShadow" }}
      p={5}
      width="100%"
      layerStyle="pinkShadow"
      textStyle="h2"
    >
      {children}
    </Box>
  );
};

export default ButtonBox;
