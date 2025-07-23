import React from 'react';
import styled from 'styled-components';
import bg4 from '../Assets/bg-4.jpg'; // Leaf background
import bg5 from '../Assets/bg-5.jpg'; // Image with people

function We() {
  return (
    <SectionWe>
      <Wrapper>
        <DivLeft>
          <TextContent>
            <H3>WE MADE YOUR EVERYDAY FASHION BETTER!</H3>
            <P>
              In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7
            </P>
            <Button>Shop Now</Button>
          </TextContent>
        </DivLeft>
        <DivRight />
      </Wrapper>
    </SectionWe>
  );
}

const SectionWe = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 60px 0;
  display: flex;
  justify-content: center;
  @media (max-width: 480px) {
    width: 80%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const DivLeft = styled.div`
  flex: 1;
  background: url(${bg4}) center/cover no-repeat;
  display: flex;
  align-items: center;
  padding: 40px;

  @media (max-width: 768px) {
    min-height: 80vh;
  }
`;

const TextContent = styled.div`
  color: #FFFFFF;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const DivRight = styled.div`
  flex: 1;
  background: url(${bg5}) center/cover no-repeat;
  min-height: 300px;

  @media (max-width: 768px) {
    min-height: 80vh;
  }
`;

const H3 = styled.h3`
  font-family: sans-serif;
  font-weight: 800;
  font-size: 34px;
  line-height: 1.4;
  letter-spacing: 0.21px;

  @media (max-width: 768px) {
    font-size: 26px;
    line-height: 1.3;
  }
`;

const P = styled.p`
  font-family: 'Causten', sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 130%;
  letter-spacing: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 450px;

  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 100%;
  }
`;

const Button = styled.button`
  margin-top: 40px;
  width: 178px;
  height: 46px;
  border-radius: 8px;
  padding: 12px 44px;
  background-color: #FFFFFF;
  color: #3C4242;
  font-family: 'Causten', sans-serif;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }

  @media (max-width: 768px) {
    width: 550px;
    height:60px;
    font-size: 16px;
    padding: 10px 36px;
    margin-top: 30px;
  }
  @media (max-width: 650px) {
    width: 350px;
    padding: 5px ;
  }
  @media (max-width: 426px) {
    width: 150px;
    padding: 5px ;
  }

`;

export default We;
