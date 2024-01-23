import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import cat from "./assets/cat.jpg";
import cat2 from "./assets/cat2.png";
import music from "./assets/music.jpg";
import music2 from "./assets/music2.jpg";
import love from "./assets/love.jpg";
import butterfly from "./assets/butterfly.png";

export default function Carrousel() {
  const imageStyle = {
    marginRight: '15px', 
  };

  return (
    <Carousel>
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
  );
}