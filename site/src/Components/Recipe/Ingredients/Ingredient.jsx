import { Box, Flex } from "@chakra-ui/layout";
import React from "react";

const Ingredient = (props) => {
  const { ingredientForRecipe } = props;

  if (!ingredientForRecipe.ingredient) {
    return null;
  }

  return (
    <Flex spacing="10px">
      <Box p="1">{ingredientForRecipe.amount}</Box>
      <Box p="1">{ingredientForRecipe.unit}</Box>
      <Box p="1"> {ingredientForRecipe.ingredient.name}</Box>
    </Flex>
  );
};

export default Ingredient;
