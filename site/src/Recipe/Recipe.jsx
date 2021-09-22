import React from "react";
import Ingredients from "./Ingredients/Ingredients";
import Instructions from "./Instructions";
import Title from "./Title";

const fake = {
  title: "Apple Banana Pie",
  ingredients: [
    { text: "Apple", id: 1 },
    { text: "Banana", id: 2 },
    { text: "Pie", id: 3 },
  ],
  // instructions: ["Mix", "Bake", "Plate", "Serve", "Eat"],
};

const Recipe = () => {
  return (
    <>
      <Title title={fake.title} />
      <Ingredients ingredients={fake.ingredients} />
      {/* <Instructions instructions={fake.instructions} /> */}
    </>
  );
};

export default Recipe;
