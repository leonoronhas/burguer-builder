import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {

    return (
        <div className="w-full md:w-screen m-auto lg:px-40 md:px-32 md:h-700px h-500px lg:h-900px text-center font-bold text-m">
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger
