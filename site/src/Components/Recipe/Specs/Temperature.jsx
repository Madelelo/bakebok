import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const Temperature = (props) => {
  const { temperature } = props;

  if (!temperature) {
    return null;
  }

  return (
    <Grid templateColumns="1fr 50%" gap={2}>
      <GridItem align="right"> Tempratur: </GridItem>
      <GridItem>
        {temperature?.value} {temperature?.unit}
      </GridItem>
    </Grid>
  );
};

export default Temperature;
