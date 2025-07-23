import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import img1 from '../Assets/flody.png';
import img2 from '../Assets/ronald.png';
import img3 from '../Assets/savannah.png';

const feedbacks = [
  {
    image: img1,
    name: 'Floyd Miles',
    rating: 4,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    image: img2,
    name: 'Ronald Richards',
    rating: 5,
    text: 'ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    image: img3,
    name: 'Savannah Nguyen',
    rating: 4,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
];

const FeedbackSection = () => {
  const [current, setCurrent] = useState(0);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % feedbacks.length);
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [isMobile]);

  return (
    <OuterSection>
      <Wrapper>
        <Header>
          <Indicator />
          <h2>Feedback</h2>
        </Header>

        <CardsWrapper>
          {feedbacks.map((item, index) => {
            const showCard = isMobile ? index === current : true;
            return (
              showCard && (
                <Card key={index}>
                  <Top>
                    <img src={item.image} alt={item.name} />
                    <Stars>
                      {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                    </Stars>
                  </Top>
                  <h4>{item.name}</h4>
                  <p>{item.text}</p>
                </Card>
              )
            );
          })}
        </CardsWrapper>

        {isMobile && (
          <Dots>
            {feedbacks.map((_, index) => (
              <Dot
                key={index}
                className={index === current ? 'active' : ''}
                onClick={() => setCurrent(index)}
              />
            ))}
          </Dots>
        )}
      </Wrapper>
    </OuterSection>
  );
};


const OuterSection = styled.section`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  @media (max-width: 480px) {
    
  }
`;

const Wrapper = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #1e1e1e;

    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
`;

const Indicator = styled.div`
  width: 6px;
  height: 30px;
  background-color: #8a33fd;
  border-radius: 3px;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 426px) {
    display: grid;
    
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #e5e5e5;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  max-width: 400px;

  h4 {
    margin-top: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e1e1e;
  }

  p {
    font-size: 0.95rem;
    color: #555;
    margin-top: 0.6rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    h4 {
      font-size: 1rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const Stars = styled.div`
  color: #ffc107;
  font-size: 1.2rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Dots = styled.div`
  text-align: center;
  margin-top: 1.5rem;
`;

const Dot = styled.span`
  display: inline-block;
  height: 10px;
  width: 10px;
  margin: 0 4px;
  background-color: #bbb;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;

  &.active {
    background-color: #333;
  }
`;




export default FeedbackSection;
