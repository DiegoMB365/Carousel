import Carousel from "react-bootstrap/Carousel";
import cat from "./assets/cat.jpg";
import cat2 from "./assets/cat2.png";
import music from "./assets/music.jpg";
import music2 from "./assets/music2.jpg";
import love from "./assets/love.jpg";
import butterfly from "./assets/butterfly.png";
import flecha from "./assets/flecha.png";

export default function Carrousel() {
  const imageStyle = {
    margin: "40px",
    width: "300px",
    height: "300px",
  };

  const textOverlayStyle = {
    position: "absolute",
    left: "200px",
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "5px",
    zIndex: 1,
  };

  const underlineStyle = {
    borderBottom: "2px solid yellow",
  };

  const carouselStyle = {
    position: "relative",
    backgroundColor: "black",
    width: "1140px",
    height: "419px",
  };

  const arrowStyle = {
    position: "absolute",
    height: "40px",
    zIndex: 1,
    top: "4px",
    left: "1000px",
    transform: "rotate(90deg)",
    cursor: "pointer",
  };

  const arrowStyle2 = {
    position: "absolute",
    height: "40px",
    zIndex: 1,
    top: "4px",
    left: "90px",
    transform: "rotate(-90deg)",
    cursor: "pointer",
  };

  return (
    <>
      <h2 style={textOverlayStyle}>
        <span style={underlineStyle}>TOP</span> CASINO
      </h2>
      <Carousel
        data-bs-theme='dark'
        style={carouselStyle}
        nextIcon={<img style={arrowStyle2} alt='Flecha derecha' src={flecha} />}
        prevIcon={
          <img style={arrowStyle} alt='Flecha izquierda' src={flecha} />
        }
      >
        <Carousel.Item>
          <img style={imageStyle} src={cat} alt='Primera foto' />
          <img style={imageStyle} src={music} alt='Segunda foto' />
          <img style={imageStyle} src={cat2} alt='Tercera foto' />
        </Carousel.Item>
        <Carousel.Item>
          <img style={imageStyle} src={love} alt='Primera foto' />
          <img style={imageStyle} src={butterfly} alt='Segunda foto' />
          <img style={imageStyle} src={music2} alt='Tercera foto' />
        </Carousel.Item>
      </Carousel>
    </>
  );
}