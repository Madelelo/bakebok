import React from "react";
import { useSanityContext } from "../SanityContext";
import { useState, useEffect } from "react";
import Recipe from "./Recipe";
import RecipeList from "./RecipeList";

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
    return <> Fetching from server</>;
  }
  return (
    <>
      <RecipeList recipeList={data} />
    </>
  );
};
export default Page;
