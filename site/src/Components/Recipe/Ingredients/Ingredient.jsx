import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const Ingredient = (props) => {
  const { ingredientForRecipe, idiot } = props;

  if (!ingredientForRecipe.ingredient) {
    return null;
  }

  const { unit, amount } = convertIfCup(ingredientForRecipe, idiot);

  return (
    <Grid templateColumns="1fr 1fr 60%" gap={1} textStyle="body_list">
      <GridItem align="right">{amount}</GridItem>
      <GridItem>{unit}</GridItem>
      <GridItem>{ingredientForRecipe.ingredient.name} </GridItem>
    </Grid>
  );
};

export default Ingredient;

const convertToGrams = (amountInCups, cupInGrams) => {
  if (amountInCups != null) {
    return amountInCups * cupInGrams;
  }
  return amountInCups;
};

const convertIfCup = (ingredientForRecipe, idiot) => {
  let unit = ingredientForRecipe.unit;
  let amount = ingredientForRecipe.amount;

  if (idiot) {
    return { unit, amount };
  }

  if (
    ingredientForRecipe.unit === "cup" &&
    ingredientForRecipe.ingredient.cupconverter != null
  ) {
    unit = "gram";
    amount = convertToGrams(
      amount,
      ingredientForRecipe.ingredient.cupconverter
    );
  }
  return { unit, amount };
};
