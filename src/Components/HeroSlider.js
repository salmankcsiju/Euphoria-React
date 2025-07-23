import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const slides = [
  require('../Assets/bg-1.jpg'),
  require('../Assets/bg-2.jpg'),
  require('../Assets/bg-3.jpg'),
];

function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  

  return (
    <Spotlight>
      <SlideshowContainer>
        {slides.map((image, index) => (
          <Slide key={index} active={index === activeSlide}>
            <BackgroundImage src={image} alt={`Slide ${index + 1}`} />
            <ContentWrapper>
              <Headings>
                <Heading>
                  <Item to="#">T-shirt /</Item>
                  <Item to="#">Tops</Item>
                </Heading>
                <Heading>
                  <H1>Summer Value Pack</H1>
                </Heading>
                <Heading>
                  <Item to="#">cool /</Item>
                  <Item to="#">colorful /</Item>
                  <Item to="#">comfy</Item>
                </Heading>
                <Button>
                  <Span>Shop Now</Span>
                </Button>
              </Headings>
            </ContentWrapper>
          </Slide>
        ))}

        <ArrowLeft onClick={prevSlide}>
          <ArrowImg src={require('../Assets/left-arrow-bold.svg').default} alt="Left Arrow" />
        </ArrowLeft>
        <ArrowRight onClick={nextSlide}>
          <ArrowImg src={require('../Assets/right-arrow-bold.svg').default} alt="Right Arrow" />
        </ArrowRight>
      </SlideshowContainer>
    </Spotlight>
  );
}


// Styled Components
const Spotlight = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  @media (max-width: 426px) {
    width: 95%;
    margin: 0 auto;
}
`;

const SlideshowContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  display: ${({ active }) => (active ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 40px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const Headings = styled.div`
  color: #FFFFFF;
  text-align: left;
  width: 439px;
  height: 455px;
  margin-left: 100px;


  @media (max-width: 768px) {
    text-align: center;
    margin-left: -380px;
    
  }
  @media (max-width: 426px) {
    margin-left: 30px;
    position: absolute;
    top: 60px;
    
  }
`;

const Heading = styled.div`
  margin-bottom: 10px;
`;

const Item = styled(Link)`
  color: #FFFFFF;
  margin-right: 5px;
  font-family: sans-serif;
  font-weight: 500;
  font-size: 32px;
  line-height: 37.77px;
  letter-spacing: 0.16px;
  text-transform: capitalize;
  text-decoration: none;


  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 426px) {
    display: none;
  }
`;

const H1 = styled.h1`
    font-family: sans-serif;
    font-weight: 800;
    font-size: 78px;
    line-height: 93.62px;
    letter-spacing: 0.31px;
    width: 439px;
    


  @media (max-width: 768px) {
    font-size: 28px;
  }
  @media (max-width: 426px) {
    font-size: 40px;
    font-weight: 800;
  }
`;

const Button = styled.button`
    background: white;
    color: black;
    padding: 12px 24px;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 8px;
    padding: 16px 72px;
    gap: 12px;
    border-color: transparent;


  @media (max-width: 768px) {
    padding: 10px 20px;
  }
  @media (max-width: 426px) {
    width: 200px;
    height: 50px;
}
`;

const Span = styled.span`
  font-weight: 600;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const ArrowLeft = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 3;
`;

const ArrowRight = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 3;
`;

const ArrowImg = styled.img`
  width: 30px;
  height: 30px;
`;
export default HeroSlider;

