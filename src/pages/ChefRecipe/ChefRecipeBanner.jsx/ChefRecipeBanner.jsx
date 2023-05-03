import React from 'react';

const ChefRecipeBanner = ({chefsData}) => {
    const { id, name, bio, imgUrl, experience, likes, numRecipes} = chefsData;
    return (
        <section className='flex md:flex gap-2 md:gap-4 justify-around'>
            <div className=''>
                    <p className='text-2xl md:text-4xl'>{name}</p>
                    <p className='font-semibold shadow-sm '>{experience} years of experience </p>
                    <p className='my-8 md:my-12 text-left'>{bio}</p>
                    <div className='flex gap-2 md:gap-4 items-center py-3'>
                        <div className='bg-amber-400 px-2 md:px-3 md:py-2 shadow-md rounded '>
                           {likes} likes
                        </div>
                        <div className='bg-amber-400 px-2 md:px-3 md:py-2 shadow-md rounded '>
                            {numRecipes} recipes
                        </div>
                    </div>
                </div>
                <div className=''>
                    <img className='h-fit md:h-96' src={imgUrl} alt="" />
                </div>
        </section>
    );
};

export default ChefRecipeBanner;