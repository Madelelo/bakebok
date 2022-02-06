import React from "react";
import Ingredient from "./Ingredient";
import { Box, Divider, Text } from "@chakra-ui/react";

const Ingredients = (props) => {
  const { ingredients } = props;

  if (!ingredients) {
    return null;
  }

  return (
    <Box>
      <Text textStyle="h3">Ingredienser:</Text>
      <Divider
        orientation="horizontal"
        p={1}
        color="yellow"
        borderBottomWidth="2px"
      />

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
