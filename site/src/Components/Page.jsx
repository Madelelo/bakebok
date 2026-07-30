import React from "react";
import { useSanityContext } from "../SanityContext";
import { useState, useEffect } from "react";
import Recipe from "./Recipe/Recipe";
import RecipeList from "./Recipe/RecipeList";
import Navbar from "./Navbar";
import { BrowserRouter, Link as RouterLink, Routes, Route } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import Footer from "./Footer";
import About from "./About";

const recipeQuery = `
  *[ _type == "recipe"] | order(name){
    name, description, cooktime, oven, temperature, pan, category, slug, difficulty,
    "instructions": coalesce(
      instructionsV2[]{_key, title, text, tip},
      instructions[]->{"_key": _id, "text": name}
    ),
    ingredients[]{amount, unit, ingredient-> {name, cupconverter, _id}},
  }
`;

const Page = () => {
  const { client } = useSanityContext();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (client.fetch) {
      client
        .fetch(recipeQuery)
        .then((data) => {
          setData(data);
          setError(null);
        })
        .catch((error) => {
          console.error(error);
          setError("Vi klarte ikke å hente oppskriftene akkurat nå.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [client, retryCount]);

  const retry = () => {
    setIsLoading(true);
    setError(null);
    setRetryCount((count) => count + 1);
  };

  if (isLoading) {
    return (
      <Box>
        <Skeleton height={{ base: "65px", md: "85px" }} />
        <Container maxW="container.md" py={10}>
          <SkeletonText noOfLines={2} spacing={4} skeletonHeight={4} mb={10} />
          <Stack spacing={5} aria-label="Laster oppskrifter">
            <Skeleton height="110px" />
            <Skeleton height="82px" />
            <Skeleton height="82px" />
            <Skeleton height="82px" />
          </Stack>
        </Container>
      </Box>
    );
  }

  if (error) {
    return (
      <BrowserRouter>
        <Box>
          <Navbar />
          <Container maxW="lg" py={16} px={4}>
            <Box
              layerStyle="blueShadow"
              p={{ base: 6, md: 8 }}
              textAlign="center"
              role="alert"
            >
              <Text as="h1" textStyle="h2">Noe gikk galt</Text>
              <Text mt={4} fontSize="16px">{error}</Text>
              <Button mt={6} colorScheme="teal" onClick={retry}>Prøv igjen</Button>
            </Box>
          </Container>
        </Box>
      </BrowserRouter>
    );
  }

  if (!data.length) {
    return (
      <BrowserRouter>
        <Box>
          <Navbar />
          <Container maxW="lg" py={16} px={4}>
            <Box layerStyle="pinkShadow" p={8} textAlign="center">
              <Text as="h1" textStyle="h2">Ingen oppskrifter ennå</Text>
              <Text mt={4} fontSize="16px">Kom gjerne tilbake senere.</Text>
            </Box>
          </Container>
        </Box>
      </BrowserRouter>
    );
  }

  return (
    <Box>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<RecipeList recipeList={data} />} />
          <Route path="/:recipeSlug" element={<Recipe recipes={data} />} />
          <Route path="/about" element={<About />} />

          <Route
            path="*"
            element={
              <Container maxW="lg" py={16} px={4}>
                <Box layerStyle="blueShadow" p={{ base: 6, md: 8 }} textAlign="center">
                  <Text as="h1" textStyle="h2">Siden finnes ikke</Text>
                  <Text mt={4} fontSize="16px">Adressen kan være feil, eller siden kan ha blitt flyttet.</Text>
                  <Button as={RouterLink} to="/" mt={6} colorScheme="teal">Gå til alle oppskrifter</Button>
                </Box>
              </Container>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  );
};

export default Page;
