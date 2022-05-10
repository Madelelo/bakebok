import React from "react";
import { Divider, Flex, Text } from "@chakra-ui/react";
import Cooktime from "./Cooktime";
import Temperature from "./Temperature";
import Oven from "./Oven";
import Pan from "./Pan";

const Specifications = (props) => {
  const { cooktime, temperature, pan, oven, difficulty } = props;

  return (
    <Flex justifyContent="center" flexFlow="column wrap">
      <Text textStyle="h3">Spesifikasjoner:</Text>
      <Divider
        orientation="horizontal"
        borderColor="yellow"
        color="yellow"
        borderBottomWidth="2px"
        paddingBottom="2"
      />

      <Cooktime cooktime={cooktime} />
      <Temperature temperature={temperature} />
      <Oven oven={oven} />
      <Pan pan={pan} />
    </Flex>
  );
};

export default Specifications;
