import React from "react";
import { AccorordianLink } from "../Styling/AccordianBox";
import { Link } from "react-router-dom";

const RecipeListItems = (props) => {
  const { recipeList, category } = props;

  return (
    <>
      {recipeList
        .filter((recipe) => recipe.category === category)
        .map((recipe, index) => {
          if (!recipe.slug) {
            return (
              <AccorordianLink key={`${recipe._id}-${index}`}>
                {recipe.name}
              </AccorordianLink>
            );
          }
          return (
            <Link key={`${recipe._id}-${index}`} to={`/${recipe.slug.current}`}>
              <AccorordianLink> {recipe.name}</AccorordianLink>
            </Link>
          );
        })}
    </>
  );
};

export default RecipeListItems;
