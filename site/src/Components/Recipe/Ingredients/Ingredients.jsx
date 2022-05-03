import React from "react";
import Ingredient from "./Ingredient";
import { Box, Divider, FormLabel, Text } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import { useState } from "react";

const Ingredients = (props) => {
  const { ingredients } = props;
  const [idiot, setIdiot] = useState(() => {
    const saved = localStorage.getItem("idiot");
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });

  if (!ingredients) {
    return null;
  }
  const handleToggle = (checked) => {
    setIdiot(checked);
    localStorage.setItem("idiot", checked.toString());
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Text textStyle="h3">Ingredienser:</Text>

        <FormLabel display="flex" alignItems="center">
          <Text fontSize="xs" paddingInline="2" textColor="dpink">
            Vanlig
          </Text>
          <Switch
            isChecked={idiot}
            onChange={(event) => handleToggle(event.target.checked)}
            size="sm"
          />
          <Text fontSize="xs" paddingInline="2" textColor="dpink">
            Idiot
          </Text>
        </FormLabel>
      </Box>

      <Divider
        orientation="horizontal"
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
