import React from "react";
import Ingredient from "./Ingredient";
import { Box, Divider, FormLabel, Text } from "@chakra-ui/react";
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
      <FormLabel>
        Idiot
        <Switch
          isChecked={idiot}
          onChange={(event) => setIdiot(event.target.checked)}
        />
      </FormLabel>
      <Divider
        orientation="horizontal"
        p={1}
        borderColor="yellow"
        color="yellow"
        borderBottomWidth="2px"
      />

      {ingredients.map((ingredientForRecipe, index) => (
        <Ingredient
          key={`${ingredientForRecipe.ingredient}-${index}`}
          ingredientForRecipe={ingredientForRecipe}
          idiot={idiot}
        />
      ))}
    </Box>
  );
};

export default Ingredients;
