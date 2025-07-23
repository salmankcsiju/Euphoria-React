import React from 'react';
import styled from 'styled-components';
import bg1 from '../Assets/yellow.JPG'; // yellow background
import bg2 from '../Assets/pink.JPG'; // purple background

function Explore() {
  return (
    <Wrapper>
      <Container>
        <Card1  >
          <TextBox>
            <Small>Low Price</Small>
            <Title>High Coziness</Title>
            <Offer>UPTO 50% OFF</Offer>
            <Link>Explore Items</Link>
          </TextBox>
        </Card1>

        <Card2 >
          <TextBox>
            <Small>Beyoung Presents</Small>
            <Title>Breezy Summer Style</Title>
            <Offer>UPTO 50% OFF</Offer>
            <Link>Explore Items</Link>
          </TextBox>
        </Card2>
      </Container>
    </Wrapper>
  );
}


export const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 100%;
  padding-top: 50px;
  display: flex;
  justify-content: space-around;
  
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    gap: 40px;
  }
`;

export const Card1 = styled.div`
  width: 48%;
  height:355.84px;
  background-image: url(${bg1});
  background-size: cover;
  background-position: center;
  border-radius: 12px;

  @media (max-width: 768px) {
    width: 80%;
  }
  
  @media (max-width: 426px) {
    width: 100%;
  }

`;
export const Card2 = styled.div`
  width: 45%;
  background-image: url(${bg2});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  
  @media (max-width: 768px) {
    width: 80%;
  }
  
  @media (max-width: 426px) {
    width: 100%;
  }
`;

export const TextBox = styled.div`
  width: 264px;
  margin: 40px 0 0 40px;

`;

export const Small = styled.h3`
  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 18px;
  line-height: 30.07px;
  letter-spacing: 0.25px;
  color:#FFFFFF ;

`;

export const Title = styled.h2`
  font-family: sans-serif;
  font-weight: 800;
  font-size: 34px;
  line-height: 45.1px;
  letter-spacing: 0px;
  color:#FFFFFF ;
  height: 91px;
`;

export const Offer = styled.p`
  font-family: sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 25.06px;
  letter-spacing: 0.25px;
  color:#FFFFFF ;

`;

export const Link = styled.h3`
  font-family: sans-serif;
  font-weight: 800;
  font-size: 20px;
  line-height: 30.13px;
  letter-spacing: 0px;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 0%;
  text-decoration: underline;
  cursor: pointer;
  color:#FFFFFF ;
`;


export default Explore;
