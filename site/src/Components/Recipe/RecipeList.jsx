import React from "react";
import { Text, Container, Box } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import AccordionBox, { AccorordianLink } from "../Styling/AccordianBox";

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
                {recipeList
                  .filter((recipe) => recipe.category === category && recipe)
                  .map((recipe, index) => (
                    <Link
                      key={`${recipe._id}-${index}`}
                      to={`/recipe/${index}`}
                    >
                      <AccorordianLink> {recipe.name}</AccorordianLink>
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
