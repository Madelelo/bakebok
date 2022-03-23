import React from "react";
import { VStack, Container } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import ButtonBox from "../Styling/ButtonBox";

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
              <ButtonBox>{recipe.name}</ButtonBox>
            </Link>
          ))}
        </VStack>
      </Container>
    </>
  );
};

export default RecipeList;
