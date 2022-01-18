import React from "react";
import Ingredient from "./Ingredient";
import { Box } from "@chakra-ui/react";

const Ingredients = (props) => {
  const { ingredients } = props;

  return (
    <Box bg="teal" w="100%" p={4} color="white" alignContent="center">
      {ingredients.map((ingredientForRecipe, index) => (
        <Ingredient
          key={`${ingredientForRecipe.ingredient._id}-${index}`}
          ingredientForRecipe={ingredientForRecipe}
        />
      ))}
    </Box>
  );
};

export default Ingredients;
