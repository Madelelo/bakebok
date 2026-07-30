import React from "react";
import { Container, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import AccordionBox from "../Styling/AccordianBox";
import RecipeListItems from "./RecipeListItems";

const preferredCategoryOrder = [
  "Kaker og brownies",
  "Kjeks og cookies",
  "Brød og gjærbakst",
  "Desserter",
  "Frosting og tilbehør",
  "Annet",
];

const RecipeList = (props) => {
  const { recipeList = [] } = props;

  const categories = [
    ...new Set(recipeList.map((recipe) => recipe.category || "Annet")),
  ].sort((a, b) => {
    const aIndex = preferredCategoryOrder.indexOf(a);
    const bIndex = preferredCategoryOrder.indexOf(b);
    if (aIndex === -1 && bIndex === -1) return a.localeCompare(b, "nb");
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });

  return (
    <>
      <Container
        maxW="container.md"
        px={{ base: 4, md: 10 }}
        py={{ base: 8, md: 10 }}
      >
        <Container maxW="container.md" px={0} pb={{ base: 8, md: 10 }}>
          <Text fontSize="18px" lineHeight="1.7">
            Velkommen til min bakebok! En samling med mine beste oppskrifter på
            en fornuftig og reklamefri side.
          </Text>
        </Container>

        <Accordion allowMultiple>
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
