import Header from "./components/Header"
import Slider from "./components/Slider";
import {React, useState } from "react"; 
import data from './data';



function App() { 

  const[currentIndex, setCurrentIndex] = useState(0); 

  const previousSlide = () => {
    setTimeout(() => {const newIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1; 
      setCurrentIndex(newIndex);}, 300)
      } 

  const nextSlide = () => {
    setTimeout(() => {const newIndex = currentIndex === data.length - 1 ? 0 : currentIndex +1; 
      setCurrentIndex(newIndex);}, 300)  
      } 
  
  const goToSlide = (slideIndex) => {
    setTimeout(() => {setCurrentIndex(slideIndex);}, 300)
  }

  return ( 
    <>
      <Header />
      <Slider 
      currentIndex = {currentIndex} 
      previousSlide = {previousSlide} 
      nextSlide = {nextSlide} 
      goToSlide = {goToSlide} 
      />
    </>
  );
}

export default App;
