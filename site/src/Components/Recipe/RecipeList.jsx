import React from "react";
import {
  VStack,
  StackDivider,
  Container,
  Box,
  Heading,
  Text,
} from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const RecipeList = (props) => {
  const { recipeList } = props;

  if (!recipeList) {
    return null;
  }

  return (
    <>
      <Container maxW="container.md" p={10}>
        Velkommen til min bakebok! En samling med mine beste oppskirfter på en
        fornuftig og reklamefri side.
      </Container>

      <Container maxW="container.md">
        <VStack spacing={8} align="stretch">
          {recipeList.map((recipe, index) => (
            <Link key={`${recipe._id}-${index}`} to={`/recipe/${index}`}>
              <Box p={5} shadow="md" borderWidth="1px">
                {recipe.name}
              </Box>
            </Link>
          ))}
        </VStack>
      </Container>
    </>
  );
};

export default RecipeList;