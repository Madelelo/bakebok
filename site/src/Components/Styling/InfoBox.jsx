import React from "react";
import { Flex, GridItem } from "@chakra-ui/react";

const InfoBox = (props) => {
  const { children } = props;

  return (
    <GridItem colSpan={{ base: 6, md: 3 }} p={{ base: 4, md: 4 }} layerStyle="pinkShadow">
      {children}
    </GridItem>
  );
};

export default InfoBox;

export const InfoBoxFull = (props) => {
  const { children } = props;

  return (
    <GridItem colSpan={{ base: 6, md: 3 }} p={{ base: 4, md: 4 }} layerStyle="pinkShadow">
      {children}
    </GridItem>
  );
};

export const InfoBoxHead = (props) => {
  const { children } = props;

  return (
    <GridItem colSpan={6} p={{ base: 4, md: 4 }} layerStyle="blueShadow">
      {children}
    </GridItem>
  );
};

export const InfoBoxSpecs = (props) => {
  const { children } = props;

  return (
    <Flex
      alignItems="flex-start"
      justifyContent="flex-start"
      fontSize="14px"
      lineHeight="1.5"
      minW="0"
      py="1"
    >
      {children}
    </Flex>
  );
};
