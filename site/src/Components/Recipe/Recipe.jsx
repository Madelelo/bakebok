import React from "react";
import Ingredients from "./Ingredients/Ingredients";
import Instructions from "./Instructions/Instructions";
import Description from "./Description";
import Title from "./Title";
import { Container, Box, Grid, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Specifications from "./Specs/Specifications";
import InfoBox, { InfoBoxFull, InfoBoxHead } from "../Styling/InfoBox";
import RecipeListItems from "./RecipeListItems";

const Recipe = (props) => {
  const { recipes } = props;
  const { recipeSlug } = useParams();

  const recipe = recipes.find(
    (recipeItem) => recipeItem.slug && recipeItem.slug.current === recipeSlug
  );

  if (!recipes) {
    return null;
  }

  return (
    <Flex direction="column" align="center">
      <Container maxW="3xl">
        <Grid
          m={4}
          templateRows="repeat(3)"
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
    </Flex>
  );
};

export default Recipe;
