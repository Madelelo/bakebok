import React from "react";
import { VStack, Container, Box } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import ButtonBox from "../Styling/ButtonBox";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const RecipeList = (props) => {
  const { recipeList } = props;

  if (!recipeList) {
    return null;
  }
  const categories = [...new Set(recipeList.map((recipe) => recipe.category))];

  const sortedCategories = categories.sort();

  console.log(recipeList);

  return (
    <>
      <Container maxW="container.md" p={10}>
        <Accordion allowToggle>
          {categories.map((category) => (
            <AccordionItem key={category}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {category ? category : "Annet"}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                {recipeList
                  .filter((recipe) => recipe.category === category && recipe)
                  .map((recipe, index) => (
                    <Link
                      key={`${recipe._id}-${index}`}
                      to={`/recipe/${index}`}
                    >
                      <Box>{recipe.name}</Box>
                    </Link>
                  ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </>
  );
};

export default RecipeList;
