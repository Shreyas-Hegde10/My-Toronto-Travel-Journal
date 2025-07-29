import Header from "./components/Header"
import Slider from "./components/Slider";  
import Snippet from "./components/Snippet";
import {React, useState } from "react";  
import data from './data'; 
import Typewriter from 'typewriter-effect';



function App() { 

  const[currentIndex, setCurrentIndex] = useState(0); 
  const [isFading, setIsFading] = useState(false);

  const previousSlide = () => { 
    setIsFading(true);
    setTimeout(() => {
      const newIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;  
      setCurrentIndex(newIndex); 
      setIsFading(false);
    },450);
    }
    
  const nextSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      const newIndex = currentIndex === data.length - 1 ? 0 : currentIndex +1; 
      setCurrentIndex(newIndex) 
      setIsFading(false);
    },450);
    
      } 
  
  const goToSlide = (slideIndex) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(slideIndex); 
      setIsFading(false);
    }, 450);
      
  }

  return ( 
    <div>
      <Header /> 
      <h1 className="header__typewriter">
  <Typewriter
    options={{
      strings: [
        'welcome to my travel journal!',
        'come explore toronto with me!',
        'hover left/right or use dots to navigate'
      ],
      autoStart: true,
      loop: true,
      delay: 75,
      html: true
    }}
  />
</h1>
      <Slider 
      currentIndex = {currentIndex} 
      previousSlide = {previousSlide} 
      nextSlide = {nextSlide} 
      goToSlide = {goToSlide}
      isFading={isFading}/>  

      <Snippet snippet={data[currentIndex].snippet} isFading={isFading} /> 

    </div>  
  );
}

export default App;
