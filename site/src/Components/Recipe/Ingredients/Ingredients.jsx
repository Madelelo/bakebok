import React from "react";
import Ingredient from "./Ingredient";
import { Box, Text } from "@chakra-ui/react";

const Ingredients = (props) => {
  const { ingredients } = props;

  if (!ingredients) {
    return null;
  }

  return (
    <Box>
      <Text fontSize="xl"> Ingredienser:</Text>

      {ingredients.map((ingredientForRecipe, index) => (
        <Ingredient
          key={`${ingredientForRecipe.ingredient}-${index}`}
          ingredientForRecipe={ingredientForRecipe}
        />
      ))}
    </Box>
  );
};

export default Ingredients;
