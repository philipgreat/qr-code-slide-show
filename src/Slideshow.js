import React, { useEffect, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import SplitPane, { Pane } from 'react-split-pane';
import QRCode from "qrcode.react";
import QRTextEditor from './QRTextEditor'
/*

const getURL=(value)=>{

  return `http://t420.doublechaintech.cn:2080/plantuml/svg/${encode(value)}`
}

function App() {

  const [text,setText]=useState(`@startuml

*/
const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const [text,setText]=useState(`
  C.LP.CO2.F.0012
  C.GP.CO2.I.0040
  C.GP.N2.I.0040
  C.GP.Ar.I.0040
  C.GP.CO2.HI.0040
  C.GP.CO2.F.0040
  C.CO2.006(JP)  
  
  `)

  const [images, setImages] = useState([]);
  const [autoplayInterval,setAutoplayInterval]=useState(1000)
  useEffect(()=>{

    if(!text){
      return;
    }
    const codes=text.trim().split("\n");
    setImages(codes)

  },[text]);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, autoplayInterval);
    return () => clearInterval(intervalId);
  }, [index, images.length, autoplayInterval]);



  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((index + images.length - 1) % images.length);
  };


  const slideShowView=()=>{



    if(images.length ===0){

      return <>Input some text on left side</>

    }

    return ( 
      <>
    <div className="buttons">
      <button onClick={handlePrev}>PREV</button>
      <button onClick={handleNext}>NEXT</button>
      <span>{images[index]}</span>
    </div>
    <div className="slides">
      
         
          <div>
          {
             images[index] && <QRCode renderAs="svg" value={images[index].trim()} size={470}/> 
          }
          </div>
          
          

    </div>
    </>

  )

  }



  return (
    <SplitPane split="vertical" minSize={200} defaultSize={400}>
  <div >

    <QRTextEditor text={text} setText={setText}/>

  </div>
  <div className="slideshow">
    {slideShowView()}
  </div>
  <div >  




  
  </div>
</SplitPane>)
  
};

export default Slideshow;
/*
return (
    
    <div className="slideshow">
      <div className="slides">
        <TransitionGroup>
          <CSSTransition key={index} timeout={500} classNames="slide">
            <img src={images[index]} alt="" />
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div className="buttons">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );



            <TransitionGroup>
        <CSSTransition key={index} timeout={500} classNames="slide">
        </CSSTransition>
      </TransitionGroup>

*/