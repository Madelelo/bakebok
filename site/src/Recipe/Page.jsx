import React from "react";
import { useSanityContext } from "../SanityContext";
import { useState, useEffect } from "react";
import Recipe from "./Recipe";

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
  }, [client]);

  if (!data.length) {
    return <> Fetching from server</>;
  }
  return (
    <>
      <Recipe recipe={data[0]} />
    </>
  );
};
export default Page;
