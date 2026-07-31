import React, { useState } from "react";
import Ingredients from "./Ingredients/Ingredients";
import Instructions from "./Instructions/Instructions";
import Description from "./Description";
import Title from "./Title";
import { Container, Box, Grid, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Specifications from "./Specs/Specifications";
import InfoBox, { InfoBoxFull, InfoBoxHead } from "../Styling/InfoBox";
import { Link as RouterLink } from "react-router-dom";
import { Link, Text } from "@chakra-ui/react";
import Difficulty from "./Difficulty";

const Recipe = (props) => {
  const { recipes } = props;
  const { recipeSlug } = useParams();
  const [idiot, setIdiot] = useState(() => {
    return localStorage.getItem("idiot") === "true";
  });

  const handleIdiotToggle = (checked) => {
    setIdiot(checked);
    localStorage.setItem("idiot", checked.toString());
  };

  if (!recipes) {
    return null;
  }

  const recipe = recipes.find(
    (recipeItem) => recipeItem.slug && recipeItem.slug.current === recipeSlug
  );

  if (!recipe) {
    return (
      <Flex direction="column" align="center" px={4} py={16}>
        <Box maxW="lg" w="100%" layerStyle="blueShadow" p={{ base: 6, md: 8 }} textAlign="center">
          <Text as="h1" textStyle="h2">Oppskriften finnes ikke</Text>
          <Text mt={4} fontSize="16px">Den kan ha blitt flyttet eller fjernet.</Text>
          <Link as={RouterLink} to="/" display="inline-block" mt={6} color="dteal" fontWeight="bold">
            Tilbake til alle oppskrifter
          </Link>
        </Box>
      </Flex>
    );
  }

  return (
    <Flex direction="column" align="center">
      <Container maxW="3xl">
        <Link
          as={RouterLink}
          to="/"
          display="inline-block"
          mx={4}
          mt={{ base: 6, md: 8 }}
          color="dteal"
          fontSize="16px"
          fontWeight="bold"
        >
          ← Tilbake til alle oppskrifter
        </Link>
        <Grid
          m={4}
          templateRows="repeat(3)"
          templateColumns="repeat(6, 1fr)"
          gap={4}
        >
          <InfoBoxHead>
            <Flex justify="space-between" align="center" gap={4}>
              <Title title={recipe.name} />
              <Difficulty difficulty={recipe.difficulty} />
            </Flex>
            <Box>
              <Description description={recipe.description} />
            </Box>
            <Specifications
              cooktime={recipe.cooktime}
              pan={recipe.pan}
              temperature={recipe.temperature}
              idiot={idiot}
            />
          </InfoBoxHead>

          <InfoBox>
            <Ingredients
              ingredients={recipe.ingredients}
              idiot={idiot}
              onIdiotToggle={handleIdiotToggle}
            />
          </InfoBox>

          <InfoBoxFull>
            <Instructions instructions={recipe.instructions} />
          </InfoBoxFull>
        </Grid>
      </Container>
    </Flex>
  );
};

export default Recipe;
