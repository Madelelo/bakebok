import React from "react";
import { Grid, GridItem, Icon } from "@chakra-ui/react";
import { GiHeatHaze } from "react-icons/gi";

const Temperature = (props) => {
  const { temperature } = props;

  if (!temperature) {
    return null;
  }

  return (
    <Grid templateColumns="1fr 50%" gap={2}>
      <GridItem align="right">
        <Icon as={GiHeatHaze} /> Tempratur:{" "}
      </GridItem>
      <GridItem>
        {temperature?.value} {temperature?.unit}
      </GridItem>
    </Grid>
  );
};

export default Temperature;
