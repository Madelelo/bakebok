import React from "react";
import Ingredients from "./Ingredients/Ingredients";
import Instructions from "./Instructions/Instructions";
import Description from "./Description";
import Title from "./Title";
import { Container, Box, Grid, GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Specifications from "./Specs/Specifications";
import InfoBox, { InfoBoxFull, InfoBoxHead } from "../Styling/InfoBox";

const Recipe = (props) => {
  const { recipes } = props;
  const { recipeId } = useParams();

  if (!recipes) {
    return null;
  }

  const recipe = recipes[recipeId];
  console.log();
  return (
    <Container maxW="3xl">
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <InfoBoxHead>
          <Box>
            <Title title={recipe.name} />
            <Description description={recipe.description} />
          </Box>
        </InfoBoxHead>

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

        <InfoBoxFull>
          <Instructions instructions={recipe.instructions} />
        </InfoBoxFull>
      </Grid>
    </Container>
  );
};

export default Recipe;
