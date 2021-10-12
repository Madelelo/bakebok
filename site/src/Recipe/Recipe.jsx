import React from "react";
import Ingredients from "./Ingredients/Ingredients";
import Instructions from "./Instructions/Instructions";
import Description from "./Description";
import Cooktime from "./Cooktime";
import Title from "./Title";
import Temperature from "./Temperature";
import Oven from "./Oven";
import Pan from "./Pan";
import { Box } from "@chakra-ui/react";
import { Center, Flex } from "@chakra-ui/layout";

const fake = {
  title: "Apple Banana Pie",
  description: "nomnomnom.",
  ingredients: [
    { text: "Apple", id: 1 },
    { text: "Banana", id: 2 },
    { text: "Pie", id: 3 },
  ],
  cooktime: "20 min",
  temperature: { value: 200, unit: "C" },
  oven: "varmluft",
  pan: { shape: "Round", size_value: 20, size_unit: "cm" },
  instructions: ["Mix", "Bake", "Plate", "Serve", "Eat"],
};

const Recipe = () => {
  return (
    <Center>
      <Flex direction="column">
        <Box border="1px" borderColor="blue">
          <Title title={fake.title} />
          <Description description={fake.description} />
        </Box>

        <Ingredients ingredients={fake.ingredients} />
        <Instructions instructions={fake.instructions} />

        <Cooktime cooktime={fake.cooktime} />
        <Temperature temperature={fake.temperature} />
        <Oven oven={fake.oven} />
        <Pan pan={fake.pan} />
      </Flex>
    </Center>
  );
};

export default Recipe;
