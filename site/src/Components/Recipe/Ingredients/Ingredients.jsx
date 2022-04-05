import React from "react";
import Ingredient from "./Ingredient";
import { Box, Divider, FormLabel, FormControl, Text } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import { useState } from "react";

const Ingredients = (props) => {
  const { ingredients } = props;
  const [idiot, setIdiot] = useState(false);

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
