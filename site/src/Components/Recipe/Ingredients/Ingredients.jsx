import React from "react";
import Ingredient from "./Ingredient";
import { Box, Divider, FormLabel, Text } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";

const Ingredients = (props) => {
  const { ingredients, idiot, onIdiotToggle } = props;

  if (!ingredients) {
    return null;
  }
  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={3}
        mb={2}
      >
        <Text textStyle="h3">Ingredienser</Text>

        <FormLabel display="flex" alignItems="center" m={0}>
          <Text fontSize="xs" paddingInline="2" textColor="dpink">
            Vanlig
          </Text>
          <Switch
            isChecked={idiot}
            onChange={(event) => onIdiotToggle(event.target.checked)}
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
        mb={2}
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
