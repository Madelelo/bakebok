import React from "react";

const Ingredient = (props) => {
  const { ingredient } = props;
  return <p>{ingredient.text}</p>;
};

export default Ingredient;
