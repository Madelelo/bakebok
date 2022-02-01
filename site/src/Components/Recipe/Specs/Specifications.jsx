import React from "react";
import { Box, Grid, GridItem, Flex } from "@chakra-ui/react";
import Cooktime from "./Cooktime";
import Temperature from "./Temperature";
import Oven from "./Oven";
import Pan from "./Pan";

const Specifications = (props) => {
  const { cooktime, temperature, pan, oven } = props;

  return (
    <Grid templateRows="repeat(4, 1fr)" gap={-1}>
      <GridItem>
        <Cooktime cooktime={cooktime} />
      </GridItem>
      <GridItem>
        <Temperature temperature={temperature} />
      </GridItem>
      <GridItem>
        <Oven oven={oven} />
      </GridItem>
      <GridItem>
        <Pan pan={pan} />
      </GridItem>
    </Grid>
  );
};

export default Specifications;
