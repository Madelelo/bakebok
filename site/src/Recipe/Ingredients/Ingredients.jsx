import React from "react";
import Ingredient from "./Ingredient";

const Ingredients = (props) => {
  const { ingredients } = props;

  return (
    <>
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.id} ingredient={ingredient} />
      ))}
    </>
  );
};

export default Ingredients;
