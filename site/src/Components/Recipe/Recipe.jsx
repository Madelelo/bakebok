import React from "react";
import Ingredients from "./Ingredients/Ingredients";
import Instructions from "./Instructions/Instructions";
import Description from "./Description";
import Title from "./Title";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Center, Flex } from "@chakra-ui/layout";
import { useParams } from "react-router-dom";
import Specifications from "./Specs/Specifications";
import InfoBox from "../Styling/InfoBox";

const Recipe = (props) => {
  const { recipes } = props;
  const { recipeId } = useParams();

  if (!recipes) {
    return null;
  }

  const recipe = recipes[recipeId];
  console.log();
  return (
    <Center maxW="xl">
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem colSpan={6} bg="lightgray">
          <Box>
            <Title title={recipe.name} />
            <Description description={recipe.description} />
          </Box>
        </GridItem>

        <InfoBox>
          <Ingredients ingredients={recipe.ingredients} />
        </InfoBox>

        <InfoBox>
          <Specifications
            cooktime={recipe.cooktime}
            pan={recipe.pan}
            temperature={recipe.temperature}
            oven={recipe.oven}
          />
        </InfoBox>

        <GridItem colSpan={6} bg="lightgray">
          <Instructions instructions={recipe.instructions} />
        </GridItem>
      </Grid>
    </Center>
  );
};

export default Recipe;
