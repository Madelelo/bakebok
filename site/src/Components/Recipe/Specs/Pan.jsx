import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const Pan = (props) => {
  const { pan } = props;

  if (!pan) {
    return null;
  }

  return (
    <Grid templateColumns="1fr 50%" gap={2}>
      <GridItem align="right"> Form: </GridItem>
      <GridItem>{pan.shape} </GridItem>
      <GridItem align="right"> Størrelse: </GridItem>
      <GridItem>{pan.size} </GridItem>
    </Grid>
  );
};

export default Pan;
