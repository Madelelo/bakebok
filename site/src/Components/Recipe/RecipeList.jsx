import React, { useMemo, useState } from "react";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
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
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [timeFilter, setTimeFilter] = useState("all");

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

  const filteredRecipes = useMemo(() => {
    return recipeList.filter((recipe) => {
      const category = recipe.category || "Annet";
      const minutes = Number.parseInt(recipe.cooktime, 10);
      const matchesCategory = categoryFilter === "all" || category === categoryFilter;
      const matchesDifficulty =
        difficultyFilter === "all" || recipe.difficulty === Number(difficultyFilter);
      const matchesTime =
        timeFilter === "all" ||
        (timeFilter === "short" && Number.isFinite(minutes) && minutes <= 30) ||
        (timeFilter === "medium" && Number.isFinite(minutes) && minutes > 30 && minutes <= 60) ||
        (timeFilter === "long" && Number.isFinite(minutes) && minutes > 60);
      return matchesCategory && matchesDifficulty && matchesTime;
    });
  }, [recipeList, categoryFilter, difficultyFilter, timeFilter]);

  const visibleCategories = categories.filter((category) =>
    filteredRecipes.some((recipe) => (recipe.category || "Annet") === category)
  );

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

        <Box layerStyle="blueShadow" p={{ base: 4, md: 5 }} mb={8}>
          <Text as="h1" textStyle="h2" mb={5}>
            Finn en oppskrift
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            <FormControl>
              <FormLabel fontWeight="semibold">Kategori</FormLabel>
              <Select
                value={categoryFilter}
                onChange={(event) => setCategoryFilter(event.target.value)}
              >
                <option value="all">Alle kategorier</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="semibold">Vanskelighetsgrad</FormLabel>
              <Select
                value={difficultyFilter}
                onChange={(event) => setDifficultyFilter(event.target.value)}
              >
                <option value="all">Alle nivåer</option>
                <option value="1">Enkel</option>
                <option value="2">Middels</option>
                <option value="3">Krevende</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="semibold">Tid i ovnen</FormLabel>
              <Select
                value={timeFilter}
                onChange={(event) => setTimeFilter(event.target.value)}
              >
                <option value="all">Alle tider</option>
                <option value="short">Inntil 30 min</option>
                <option value="medium">31–60 min</option>
                <option value="long">Over 60 min</option>
              </Select>
            </FormControl>
          </SimpleGrid>
          <Text mt={4} color="dgray" aria-live="polite">
            {filteredRecipes.length} {filteredRecipes.length === 1 ? "oppskrift" : "oppskrifter"}
          </Text>
        </Box>

        {visibleCategories.length ? (
          <Accordion allowMultiple>
            {visibleCategories.map((category) => (
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
                <RecipeListItems recipeList={filteredRecipes} category={category} />
              </AccordionPanel>
            </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <Box layerStyle="pinkShadow" p={6} textAlign="center">
            <Text fontSize="18px" fontWeight="semibold">
              Ingen oppskrifter passer filtrene.
            </Text>
            <Text mt={2}>Prøv en annen kombinasjon.</Text>
          </Box>
        )}
      </Container>
    </>
  );
};

export default RecipeList;
