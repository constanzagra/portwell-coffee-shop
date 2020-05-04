import React from 'react';
import './App.css';
import Hero from './sections/Hero/Hero';
import Menu from './sections/Coffees/coffes';
import OurStory from './sections/OurStory/ourstory';
import FreshBeans from './sections/FreshBeans/freshbeans';
import GreatCoffee from './sections/GreatCoffe/greatCoffee';
import BestCoffeShop from './sections/TheBestCS/theBestCoffeeShop';
import Gallery from './sections/Gallery/gallery'
import LatestBlog from './sections/Latets/Latest';

const App = () => {
  return (
    <main>
      <Hero> </Hero>
      <Menu> </Menu>
      <OurStory> </OurStory>
      <FreshBeans></FreshBeans>
      <GreatCoffee> </GreatCoffee>
      <BestCoffeShop> </BestCoffeShop> 
      <Gallery> </Gallery>
      <LatestBlog> </LatestBlog>
      
    </main>
  );
}

export default App;
