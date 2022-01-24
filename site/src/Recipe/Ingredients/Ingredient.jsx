import { Text } from "@chakra-ui/layout";
import React from "react";

const Ingredient = (props) => {
  const { ingredientForRecipe } = props;

  if (!ingredientForRecipe.ingredient) {
    return null;
  }

  return (
    <Text>
      {ingredientForRecipe.ingredient.name} {ingredientForRecipe.amount}{" "}
      {ingredientForRecipe.unit}
    </Text>
  );
};

export default Ingredient;
