import React from 'react';
import ContainerCard from './Card/ContainerCard'

const CardContainer = () => {
    return (

        <>
            <h1 className="text-white text-8xl text-center leading-tight m-32 font-bold tracking-tighter">
                Harvesting Insights from <br /> Diligent Endeavors
            </h1>

            <div className="card-container flex flex-col gap-28 ">
                <div className='flex justify-between px-20'>
                    <ContainerCard
                        number="01"
                        title="BYTEsite"
                        description="It is the official Website for our society..."
                        image="https://plus.unsplash.com/premium_photo-1711367287493-6fe610a1341f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZyJTIwZ2xhc3N8ZW58MHx8MHx8fDA%3D"
                        flexDir="flex-col"
                        width="max-w-md"
                    />
                    <ContainerCard
                        number="02"
                        title="MR Glass"
                        description="A concept Glasses for Extended Reality (XR) and Mixed Reality (MR)..."
                        image="https://plus.unsplash.com/premium_photo-1711367287493-6fe610a1341f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZyJTIwZ2xhc3N8ZW58MHx8MHx8fDA%3D"
                        flexDir="flex-col-reverse"
                        width="max-w-md"
                    />
                </div>
                <div className='mx-64'>
                    <ContainerCard
                        number="03"
                        title="Micro Mouse"
                        description="A micro mouse is a small robotic device designed to navigate..."
                        image="https://plus.unsplash.com/premium_photo-1711367287493-6fe610a1341f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZyJTIwZ2xhc3N8ZW58MHx8MHx8fDA%3D"
                        flexDir="flex"
                        width="max-w-4xl"

                    />
                </div>
            </div></>
    );
};

export default CardContainer;