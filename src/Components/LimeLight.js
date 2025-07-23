import React, { useState } from 'react';
import styled from 'styled-components';
import { Wrapper } from './Explore';
import { Link } from 'react-router-dom';
import { limeLightProducts } from '../data/products';

function LimeLight() {
  const [liked, setLiked] = useState(Array(limeLightProducts.length).fill(false));

  const toggleLike = (index) => {
    const updated = [...liked];
    updated[index] = !updated[index];
    setLiked(updated);
  };

  return (
    <LimeLightSection>
      <Wrapper>
        <SectionHead>
          <svg width="6" height="30" viewBox="0 0 6 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="6" height="30" rx="3" fill="#8A33FD" />
          </svg>
          <h2>In The Limelight</h2>
        </SectionHead>

        <SectionProducts>
          {limeLightProducts.map((item, index) => (
            <Card to={`/product/${item.id}`} key={index}>
              <ImageWrapper>
                <img src={item.images} alt={item.name} />
                <HeartButton
                  onClick={() => toggleLike(index)}
                  className={liked[index] ? 'active' : ''}
                >
                  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.71977 3.04531C6.34495 1.44311 4.05234 1.01212 2.32979 2.47926C0.607228 3.94639 0.364716 6.39937 1.71745 8.13456C2.84216 9.57725 6.24591 12.62 7.36148 13.6048C7.48629 13.715 7.54869 13.7701 7.62148 13.7917C7.68502 13.8106 7.75453 13.8106 7.81806 13.7917C7.89085 13.7701 7.95326 13.715 8.07807 13.6048C9.19363 12.62 12.5974 9.57725 13.7221 8.13456C15.0748 6.39937 14.8619 3.93096 13.1098 2.47926C11.3576 1.02756 9.0946 1.44311 7.71977 3.04531Z"
                      stroke="#3C4242"
                      strokeWidth="1.26"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </HeartButton>
              </ImageWrapper>

              <ProductInfo>
                <TopInfo>
                  <ProductName>{item.name}</ProductName>
                </TopInfo>
                <BottomInfo>
                  <BrandName>{item.brand}</BrandName>
                  <PriceButton>
                    <Price>{item.price}</Price>
                  </PriceButton>
                </BottomInfo>
              </ProductInfo>
            </Card>
          ))}
        </SectionProducts>
      </Wrapper>
    </LimeLightSection>
  );
}


const LimeLightSection = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 95%;
  }
  @media (max-width: 426px) {
    margin-left: 30px;
  }
`;
const SectionHead = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    color: #1e1e1e;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  svg {
    height: 24px;
    width: 5px;
  }
`;

const SectionProducts = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Card = styled(Link)`
  background: #fff;
  overflow: hidden;
  border-radius: 12px;
  transition: transform 0.3s ease;
    text-decoration: none;
  color: inherit;

  * {
    text-decoration: none !important;
    color: inherit;
  }

  &:hover {
    transform: translateY(-4px);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  img {
  width: 282px;
  height: 370px;
  border-radius: 12px;
  }

  @media (max-width: 480px) {
    height: 220px;
  }
`;

const HeartButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: #fff;
  border: none;
  border-radius: 50%;
  padding: 6px;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;

  &.active {
    background: #ff69b4;
  }

  svg {
    display: block;
  }

  &:hover {
    transform: scale(1.1);
    background: #ff69b4;
  }

   @media (max-width: 768px) {
      top: 15px;
      right: 40px;
   }
      @media (max-width: 426px) {
      top: 20px;
      right: 90px;
   }
`;

const ProductInfo = styled.div`
  padding: 0.8rem 0.5rem;
`;

const TopInfo = styled.div``;

const BottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductName = styled.p`
  font-weight: 600;
  color: #333;
  margin-bottom: 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const BrandName = styled.p`
  font-size: 0.85rem;
  color: #777;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const PriceButton = styled.button`
  background: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  border-radius: 8px;
  border: none;
  height: 36px;
  min-width: 72px;

  @media (max-width: 768px) {
    padding: 4px 10px;
    margin-right: 25px;
  }
  @media (max-width: 426px) {
    padding: 4px 10px;
    margin-right: 60px;
  }
`;

const Price = styled.p`
  font-family: 'Causten', sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;



export default LimeLight;
