import React from "react";
import Ingredients from "./Ingredients/Ingredients";
import Instructions from "./Instructions/Instructions";
import Description from "./Description";
import Cooktime from "./Cooktime";
import Title from "./Title";
import Temperature from "./Temperature";
import Oven from "./Oven";
import Pan from "./Pan";

const fake = {
  title: "Apple Banana Pie",
  description: "nomnomnom.",
  ingredients: [
    { text: "Apple", id: 1 },
    { text: "Banana", id: 2 },
    { text: "Pie", id: 3 },
  ],
  cooktime: "20 min",
  temperature: { value: 200, unit: "C" },
  oven: "varmluft",
  pan: { shape: "Round", size_value: 20, size_unit: "cm" },
  instructions: ["Mix", "Bake", "Plate", "Serve", "Eat"],
};

const Recipe = () => {
  return (
    <>
      <header>
        <Title title={fake.title} />
        <Description description={fake.description} />
      </header>

      <Ingredients ingredients={fake.ingredients} />
      <Instructions instructions={fake.instructions} />

      <Cooktime cooktime={fake.cooktime} />
      <Temperature temperature={fake.temperature} />
      <Oven oven={fake.oven} />
      <Pan pan={fake.pan} />
    </>
  );
};

export default Recipe;
