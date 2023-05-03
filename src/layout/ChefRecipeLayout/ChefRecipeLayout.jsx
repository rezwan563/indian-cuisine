import React from 'react';
import ChefRecipeBanner from '../../pages/ChefRecipe/ChefRecipeBanner.jsx/ChefRecipeBanner';
import ChefRecipeDetails from '../../pages/ChefRecipe/ChefRecipeDetails.jsx/ChefRecipeDetails';
import { useLoaderData } from 'react-router-dom';

const ChefRecipeLayout = () => {
    const chefsData = useLoaderData();
    return (
        <section className=''>
            <div className='w-3/4 mx-auto bg-slate-100 p-4 rounded my-8 md:my-12'>
                <ChefRecipeBanner chefsData={chefsData}></ChefRecipeBanner>
            </div>
            <div className='w-3/4 mx-auto my-8 md:my-12 bg-yellow-200'>
                <ChefRecipeDetails></ChefRecipeDetails>
            </div>
        </section>
    );
};

export default ChefRecipeLayout;