import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import arrowRight from '../Assets/arrow-right.svg';
import { womenProducts } from '../data/products';

const WomenCategories = () => {
  return (
    <Wrapper>
      <Title>
        <svg width="6" height="30" viewBox="0 0 6 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="6" height="30" rx="3" fill="#8A33FD" />
        </svg>
        <h2>Categories For Women</h2></Title>
      <Grid>
        {womenProducts.map((item) => (
          <Card to={`/product/${item.id}`} key={item.id} >
            <Image src={item.images} alt={item.name} />
            <Info>
              <Name>{item.name}</Name>
              <Explore>
                Explore Now!
                <Arrow src={arrowRight} alt="arrow" />
              </Explore>
            </Info>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
};




const Wrapper = styled.div`
  padding: 30px 20px;
  background: #fff;
  width: 90%;
  margin:  0 auto;
  @media (max-width: 426px) {
    margin-left: 30px;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 20px;

  h2{
    font-family: sans-serif;
    font-weight: 600;
    font-style: 65 Bold;
    font-size: 28px;
    line-height: 33.5px;
    letter-spacing: 2%;
    color: #3C4242;
  }
  svg{
  width: 6px;
  height: 30px;
  opacity: 1;
  border-radius: 10px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(Link)`
  text-decoration: none;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

const Image = styled.img`
  width: 270.3646545410156px;
  height: 393.2576904296875px;
  border-radius: 10px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 10px 15px;
`;

const Name = styled.p`
  font-family: Causten;
  font-weight: 700;
  font-size: 17.88px;
  line-height: 27.93px;
  letter-spacing: -4%;
  color: #2A2F2F;
  
`;

const Explore = styled.span`
  font-size: 12px;
  color: #888;
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  gap: 25px;

  @media (max-width: 768px) {
    margin-right: 40px;
  }
  @media (max-width: 426px) {
    margin-right: 100px;
  }
`;

const Arrow = styled.img`
  width: 12px;
  margin-left: px;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: translateX(3px);
  }
`;
export default WomenCategories;




