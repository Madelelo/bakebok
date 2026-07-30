import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Cooktime from "./Cooktime";
import Temperature from "./Temperature";
import Pan from "./Pan";

const Specifications = (props) => {
  const { cooktime, temperature, pan, idiot } = props;

  return (
    <SimpleGrid
      columns={{ base: 1, sm: 3 }}
      spacing={{ base: 3, md: 4 }}
      mt={6}
      pt={5}
      borderTop="2px solid"
      borderColor="yellow"
    >
      <Cooktime cooktime={cooktime} />
      <Temperature temperature={temperature} idiot={idiot} />
      <Pan pan={pan} />
    </SimpleGrid>
  );
};

export default Specifications;
