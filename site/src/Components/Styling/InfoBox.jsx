import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";

const InfoBox = (props) => {
  const { children } = props;

  return (
    <GridItem colSpan={3} bg="lightblue" p={5}>
      {children}
    </GridItem>
  );
};

export default InfoBox;

export const InfoBoxFull = (props) => {
  const { children } = props;

  return (
    <GridItem colSpan={6} bg="lightblue" p={5}>
      {children}
    </GridItem>
  );
};
