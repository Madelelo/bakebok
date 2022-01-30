import React from "react";
import Ingredients from "./Ingredients/Ingredients";
import Instructions from "./Instructions/Instructions";
import Description from "./Description";
import Title from "./Title";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Center, Flex } from "@chakra-ui/layout";
import { useParams } from "react-router-dom";
import Specifications from "./Specs/Specifications";

//IKKE I BRUK
//const fake = {
//   title: "Apple Banana Pie",
//   description: "nomnomnom.",
//   ingredients: [
//     { text: "Apple", id: 1 },
//     { text: "Banana", id: 2 },
//     { text: "Pie", id: 3 },
//   ],
//   cooktime: "20 min",
//   temperature: { value: 200, unit: "C" },
//   oven: "varmluft",
//   pan: { shape: "Round", size_value: 20, size_unit: "cm" },
//   instructions: ["Mix", "Bake", "Plate", "Serve", "Eat"],
// };

const Recipe = (props) => {
  const { recipes } = props;
  const { recipeId } = useParams();

  if (!recipes) {
    return null;
  }

  const recipe = recipes[recipeId];
  console.log();
  return (
    <Center>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem colSpan={6} bg="lightgray">
          <Box>
            <Title title={recipe.name} />
            <Description description={recipe.description} />
          </Box>
        </GridItem>
        <GridItem colSpan={3} bg="lightgray">
          <Ingredients ingredients={recipe.ingredients} />
        </GridItem>
        <GridItem colSpan={3} bg="lightgray">
          <Specifications
            cooktime={recipe.cooktime}
            pan={recipe.pan}
            temperature={recipe.temperature}
            oven={recipe.oven}
          />
        </GridItem>
        <GridItem colSpan={6} bg="lightgray">
          <Instructions instructions={recipe.instructions} />
        </GridItem>
      </Grid>
    </Center>
  );
};

export default Recipe;
