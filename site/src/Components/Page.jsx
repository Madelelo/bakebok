import React from "react";
import { useSanityContext } from "../SanityContext";
import { useState, useEffect } from "react";
import Recipe from "./Recipe/Recipe";
import RecipeList from "./Recipe/RecipeList";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Spinner, Text } from "@chakra-ui/react";
import Footer from "./Footer";
import About from "./About";

const Page = () => {
  const { client } = useSanityContext();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
          setError("Could not load recipes from Sanity.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [client, setData, recipeQuery]);

  if (isLoading) {
    return <Spinner m="10" p="4" color="teal" />;
  }

  if (error) {
    return <Text m="10">{error}</Text>;
  }

  if (!data.length) {
    return <Text m="10">No recipes found.</Text>;
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
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  );
};

export default Page;
