import React from 'react';
import { HeroTitle, HeroDescription, HeroLink, Hero } from './Home.styled'
import { HeroContainer } from '../../components/Container/HeroContainer.styled';
import { MainContainer } from '../../components/Container/MainContainer.styled';

const HomePage = () => {
    return (<>
        <Hero>
        <MainContainer>
             <HeroContainer>
            <HeroTitle>Car Rental Services: Explore Your Journey with Our Fleet</HeroTitle>
            <HeroDescription>Welcome to our car rental services! Whether you're traveling for business or pleasure, our diverse fleet of vehicles is ready to take you on your journey. From compact cars for city adventures to spacious SUVs for family road trips, we have the perfect vehicle to suit your needs. Our hassle-free rental process ensures a smooth and convenient experience. Discover the freedom of the open road with our car rental services today!
            </HeroDescription>
        <HeroLink to="/catalog">Let's see the cars!</HeroLink>
            </HeroContainer>
              </MainContainer>
             </Hero>
    </>
           );
};

export default HomePage;