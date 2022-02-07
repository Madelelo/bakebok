import React from "react";
import { useSanityContext } from "../SanityContext";
import { useState, useEffect } from "react";
import Recipe from "./Recipe/Recipe";
import RecipeList from "./Recipe/RecipeList";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Spinner } from "@chakra-ui/react";
import Footer from "./Footer";

const Page = () => {
  const { client } = useSanityContext();
  const [data, setData] = useState([]);

  const recipeQuery = `
  *[ _type == "recipe" ]{
    name, description, cooktime, oven, temperature, pan,
    instructions[]-> {_id, name},
    ingredients[]{amount, unit, ingredient-> {name, _id}},
  }
  `;

  useEffect(() => {
    if (client.fetch) {
      client
        .fetch(recipeQuery)
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [client, setData, recipeQuery]);

  if (!data.length) {
    return <Spinner m="10" p="4" color="teal" />;
  }

  return (
    <Box>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<RecipeList recipeList={data} />} />
          <Route path="recipe/:recipeId" element={<Recipe recipes={data} />} />

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </Box>
  );
};

export default Page;
