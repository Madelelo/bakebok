import React from "react";
import { Container } from "@chakra-ui/layout";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import AccordionBox from "../Styling/AccordianBox";
import RecipeListItems from "./RecipeListItems";

const RecipeList = (props) => {
  const { recipeList } = props;

  if (!recipeList) {
    return null;
  }
  const categories = [...new Set(recipeList.map((recipe) => recipe.category))];

  const sortedCategories = categories.sort();

  return (
    <>
      <Container maxW="container.md" p={10}>
        <Container maxW="container.md" p={10}>
          Velkommen til min bakebok! En samling med mine beste oppskirfter på en
          fornuftig og reklamefri side.
        </Container>

        <Accordion allowToggle>
          {categories.map((category) => (
            <AccordionItem
              key={category}
              borderColor="white"
              isFocusable="false"
            >
              <AccordionButton>
                <AccordionBox>
                  {category ? category : "Annet"}
                  <AccordionIcon />
                </AccordionBox>
              </AccordionButton>

              <AccordionPanel pb={4}>
                <RecipeListItems recipeList={recipeList} category={category} />
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </>
  );
};

export default RecipeList;
