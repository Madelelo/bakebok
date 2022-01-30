import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const Oven = (props) => {
  const { oven } = props;

  if (!oven) {
    return null;
  }

  return (
    <Grid templateColumns="1fr 50%" gap={2}>
      <GridItem align="right"> Type ovn: </GridItem>
      <GridItem>{oven} </GridItem>
    </Grid>
  );
};

export default Oven;
