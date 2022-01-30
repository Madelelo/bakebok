import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const Cooktime = (props) => {
  const { cooktime } = props;

  if (!cooktime) {
    return null;
  }

  return (
    <Grid templateColumns="1fr 50%" gap={2}>
      <GridItem align="right"> Tid i ovn: </GridItem>
      <GridItem>{cooktime} minutter</GridItem>
    </Grid>
  );
};

export default Cooktime;
