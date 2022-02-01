import React from "react";
import { Grid, GridItem, Icon } from "@chakra-ui/react";
import { GiResize } from "react-icons/gi";
const Pan = (props) => {
  const { pan } = props;

  if (!pan) {
    return null;
  }

  return (
    <Grid templateColumns="1fr 50%" gap={2}>
      <GridItem align="right">
        <Icon as={GiResize} /> Form:
      </GridItem>
      <GridItem>{pan.shape} </GridItem>
      <GridItem align="right"> Størrelse: </GridItem>
      <GridItem>{pan.size} </GridItem>
    </Grid>
  );
};

export default Pan;
