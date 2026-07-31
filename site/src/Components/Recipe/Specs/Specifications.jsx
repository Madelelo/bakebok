import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Cooktime from "./Cooktime";
import Temperature from "./Temperature";
import Pan from "./Pan";

const Specifications = (props) => {
  const { cooktime, temperature, pan, idiot } = props;

  return (
    <SimpleGrid
      columns={3}
      spacing={{ base: 2, md: 3 }}
      mt={{ base: 4, md: 3 }}
      pt={{ base: 3, md: 2 }}
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
