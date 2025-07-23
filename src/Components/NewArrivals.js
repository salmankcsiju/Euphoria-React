import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import img1 from '../Assets/Rectangle 28.png';
import img2 from '../Assets/first photo.png';
import img3 from '../Assets/second.png';
import img4 from '../Assets/photographer-white-background.png';

const newArrivals = [
  { id: 1, img: img1, name: 'Knitted Joggers' },
  { id: 2, img: img2, name: 'Full Sleeve' },
  { id: 3, img: img3, name: 'Active T-Shirts' },
  { id: 4, img: img4, name: 'Urban Shirts' },
];

function NewArrivals() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Section>
      <Header>
        <svg width="6" height="30" viewBox="0 0 6 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="6" height="30" rx="3" fill="#8A33FD" />
        </svg>
        <h2>New Arrival</h2>
      </Header>

      <Content>
        <Arrow onClick={() => scroll('left')}>&lt;</Arrow>
        <Cards ref={scrollRef}>
          {newArrivals.map((item) => (
            <Item to={`/product/${item.id}`} key={item.id}>
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </Item>
          ))}
        </Cards>
        <Arrow onClick={() => scroll('right')}>&gt;</Arrow>
      </Content>
    </Section>
  );
}


const Section = styled.section`
  width: 90%;
  margin: 0 auto;
  padding: 40px 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  h2 {
    font-family: 'Core Sans C', sans-serif;
    font-size: 34px;
    font-weight: 600;
    margin-left: 16px;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 24px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 6px;
  }
`;

const Arrow = styled.button`
  border: none;
  background-color: #fff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }
`;

const Cards = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 0 10px;
  flex: 1;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled(Link)`
  flex: 0 0 auto;
  width: 262px;
  text-align: center;
  text-decoration: none;
  color: inherit;

  img {
    width: 100%;
    height: 262px;
    object-fit: cover;
    border-radius: 12px;
  }

  p {
    margin-top: 12px;
    font-weight: 600;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 200px;
    img {
      height: 220px;
    }
  }
`;
export default NewArrivals;
