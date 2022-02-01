import React from "react";
import { Grid, GridItem, Icon } from "@chakra-ui/react";
import { GiSandsOfTime } from "react-icons/gi";

const Cooktime = (props) => {
  const { cooktime } = props;

  if (!cooktime) {
    return null;
  }

  return (
    <Grid templateColumns="1fr 50%" gap={2}>
      <GridItem align="right">
        <Icon as={GiSandsOfTime} />
        Tid i ovn:{" "}
      </GridItem>
      <GridItem>{cooktime} minutter</GridItem>
    </Grid>
  );
};

export default Cooktime;
