import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  // Convert object to array with keys()
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (!transformedIngredients.length) {
    transformedIngredients = <p>Please start adding Ingredients!</p>;
  }

  return (
    <div className="w-full md:w-screen m-auto lg:px-40 md:px-32 md:h-700px h-500px lg:h-900px text-center font-bold text-m">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
