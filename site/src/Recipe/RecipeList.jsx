import React from "react";
import { VStack, StackDivider, Box, Link } from "@chakra-ui/layout";

const RecipeList = (props) => {
  const { recipeList } = props;

  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      {recipeList.map((recipe) => (
        <Link h="40px" bg="blue.200" to="/home">
          {recipe.name}
        </Link>
      ))}
    </VStack>
  );
};

export default RecipeList;
