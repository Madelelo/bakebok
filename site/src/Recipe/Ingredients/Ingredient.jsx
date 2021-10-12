import { Text } from "@chakra-ui/layout";
import React from "react";

const Ingredient = (props) => {
  const { ingredient } = props;
  return <Text>{ingredient.text}</Text>;
};

export default Ingredient;
