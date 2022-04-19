import React from "react";
import { Box } from "@chakra-ui/react";

const AccordionBox = (props) => {
  const { children } = props;

  return (
    <Box
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
export default AccordionBox;

export const AccorordianLink = (props) => {
  const { children } = props;

  return (
    <Box
      _hover={{ layerStyle: "linkShadow" }}
      p={5}
      width="100%"
      textStyle="h3"
      alignItems="center"
    >
      {children}
    </Box>
  );
};
