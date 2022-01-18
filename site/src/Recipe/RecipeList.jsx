import React from "react";
import { VStack, StackDivider, Box } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const RecipeList = (props) => {
  const { recipeList } = props;

  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      {recipeList.map((recipe, index) => (
        <Link key={`${recipe._id}-${index}`} to={`/recipe/${index}`}>
          {recipe.name}{" "}
        </Link>
      ))}
    </VStack>
  );
};

export default RecipeList;
