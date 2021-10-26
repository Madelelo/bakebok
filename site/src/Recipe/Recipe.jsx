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

const Recipe = (props) => {
  const { recipe } = props;
  console.log(recipe);

  return (
    <Center>
      <Flex direction="column">
        <Box border="1px" borderColor="blue">
          <Title name={recipe.name} />
          <Description description={recipe.description} />
        </Box>

        <Ingredients ingredients={recipe.ingredients} />
        <Instructions instructions={recipe.instructions} />

        {/* <Cooktime cooktime={recipe.cooktime} />
        <Temperature temperature={recipe.temperature} />
        <Oven oven={recipe.oven} />
        <Pan pan={recipe.pan} /> */}
      </Flex>
    </Center>
  );
};

export default Recipe;
