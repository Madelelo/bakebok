import { Box, Flex } from "@chakra-ui/layout";
import { Divider, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const Ingredient = (props) => {
  const { ingredientForRecipe } = props;

  if (!ingredientForRecipe.ingredient) {
    return null;
  }

  return (
    <Grid templateColumns="1fr 1fr 60%" gap={1} textStyle="body_list">
      <GridItem align="right">{ingredientForRecipe.amount}</GridItem>
      <GridItem>{ingredientForRecipe.unit}</GridItem>
      <GridItem>{ingredientForRecipe.ingredient.name} </GridItem>
    </Grid>
  );
};

export default Ingredient;
