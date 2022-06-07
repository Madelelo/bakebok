import React from "react";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import Cooktime from "./Cooktime";
import Temperature from "./Temperature";
import Oven from "./Oven";
import Pan from "./Pan";

const Specifications = (props) => {
  const { cooktime, temperature, pan, oven, difficulty } = props;

  return (
    <Box>
      <Text textStyle="h3">Spesifikasjoner:</Text>
      <Divider
        orientation="horizontal"
        borderColor="yellow"
        color="yellow"
        borderBottomWidth="2px"
        paddingBottom="2"
      />
      <Flex justifyContent="center" flexFlow="column wrap">
        <Cooktime cooktime={cooktime} />
        <Temperature temperature={temperature} />
        <Oven oven={oven} />
        <Pan pan={pan} />
      </Flex>
    </Box>
  );
};

export default Specifications;
