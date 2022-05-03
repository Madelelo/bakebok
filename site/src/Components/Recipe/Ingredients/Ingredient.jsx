import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const Ingredient = (props) => {
  const { ingredientForRecipe, idiot } = props;

  if (!ingredientForRecipe.ingredient) {
    return null;
  }

  const { unit, amount } = convert(ingredientForRecipe, idiot);

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

const convertToCups = (amountInGrams, cupInGrams) => {
  if (amountInGrams != null) {
    let calcAmount = amountInGrams / cupInGrams;
    calcAmount = calcAmount.toFixed(1);
    return calcAmount;
  }
  return amountInGrams;
};

const convert = (ingredientForRecipe, idiot) => {
  let unit = ingredientForRecipe.unit;
  let amount = ingredientForRecipe.amount;
  let cupconverter = ingredientForRecipe.ingredient.cupconverter;

  if (unit === "gram" && idiot && cupconverter != null) {
    unit = "cup";
    amount = convertToCups(amount, cupconverter);
  }

  if (unit === "cup" && !idiot && cupconverter != null) {
    unit = "gram";
    amount = convertToGrams(amount, cupconverter);
  }
  return { unit, amount };
};

// const convertIfCup = (ingredientForRecipe, idiot) => {
//   let unit = ingredientForRecipe.unit;
//   let amount = ingredientForRecipe.amount;

//   if (idiot) {
//     //konfertil til cups
//   }

//   if (
//     ingredientForRecipe.unit === "cup" &&
//     ingredientForRecipe.ingredient.cupconverter != null
//   ) {
//     unit = "gram";
//     amount = convertToGrams(
//       amount,
//       ingredientForRecipe.ingredient.cupconverter
//     );
//   }
//   return { unit, amount };
// };
