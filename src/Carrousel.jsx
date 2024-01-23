import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import cat from "./assets/cat.jpg";
import cat2 from "./assets/cat2.png";
import music from "./assets/music.jpg";
import music2 from "./assets/music2.jpg";
import love from "./assets/love.jpg";
import butterfly from "./assets/butterfly.png";
import flecha from "./assets/flecha.png";

export default function Carrousel() {
  const imageStyle = {
    margin: '40px',
    width: '300px',
    height: '300px',
  };

  const textOverlayStyle = {
    position: 'absolute',
    left: '200px',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '5px',
    zIndex: 1,
  };

  const carouselStyle = {
    position: 'relative',
    backgroundColor: 'black',
  };

  const arrowStyle = {
    position: 'absolute',
    height:"40px",
    zIndex: 1,
    right: "250px", 
    center: '10px',
    transform: 'rotate(90deg)', 
    cursor: 'pointer', 
  };


const arrowStyle2 = {
  position: 'absolute',
  height: '40px',
  zIndex: 1,
  right: '200px', 
  buttom: '10px', 
  transform: 'rotate(-90deg)', 
  cursor: 'pointer', 
};



  return (
    <>
      <h2 style={textOverlayStyle}>TOP CASINO</h2>
      <img style={arrowStyle} alt='Flecha izquierda' src={flecha} />
      <img style={arrowStyle2} alt='Flecha derecha' src={flecha} />
      <Carousel style={carouselStyle}>
        <Carousel.Item>
          <img
            style={imageStyle}
            src={cat}
            alt="Primera foto"
          />
          <img
            style={imageStyle}
            src={music}
            alt="Segunda foto"
          />
          <img
            style={imageStyle}
            src={cat2}
            alt="Tercera foto"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={imageStyle}
            src={love}
            alt="Primera foto"
          />
          <img
            style={imageStyle}
            src={butterfly}
            alt="Segunda foto"
          />
          <img
            style={imageStyle}
            src={music2}
            alt="Tercera foto"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
