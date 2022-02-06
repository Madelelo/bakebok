import React from "react";
import { Flex, Grid, GridItem, Divider, Text } from "@chakra-ui/react";
import Cooktime from "./Cooktime";
import Temperature from "./Temperature";
import Oven from "./Oven";
import Pan from "./Pan";

const Specifications = (props) => {
  const { cooktime, temperature, pan, oven } = props;

  return (
    <Flex p="10" justify="center" flexFlow="row wrap">
      <Cooktime cooktime={cooktime} />
      <Temperature temperature={temperature} />
      <Oven oven={oven} />
      <Pan pan={pan} />
    </Flex>
  );
};

export default Specifications;
