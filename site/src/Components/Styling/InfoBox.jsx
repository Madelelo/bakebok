import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";

const InfoBox = (props) => {
  const { children } = props;

  return (
    <GridItem colSpan={3} p={5} layerStyle="pinkShadow">
      {children}
    </GridItem>
  );
};

export default InfoBox;

export const InfoBoxFull = (props) => {
  const { children } = props;

  return (
    <GridItem colSpan={6} p={5} layerStyle="pinkShadow">
      {children}
    </GridItem>
  );
};

export const InfoBoxHead = (props) => {
  const { children } = props;

  return (
    <GridItem colSpan={6} p={5} layerStyle="blueShadow">
      {children}
    </GridItem>
  );
};
