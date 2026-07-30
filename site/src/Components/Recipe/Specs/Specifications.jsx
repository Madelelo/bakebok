import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Cooktime from "./Cooktime";
import Temperature from "./Temperature";
import Pan from "./Pan";
import Difficulty from "../Difficulty";

const Specifications = (props) => {
  const { cooktime, temperature, pan, difficulty } = props;

  return (
    <SimpleGrid
      columns={{ base: 2, md: 4 }}
      spacing={{ base: 3, md: 4 }}
      mt={6}
      pt={5}
      borderTop="2px solid"
      borderColor="yellow"
    >
      <Cooktime cooktime={cooktime} />
      <Temperature temperature={temperature} />
      <Pan pan={pan} />
      <Difficulty difficulty={difficulty} />
    </SimpleGrid>
  );
};

export default Specifications;
