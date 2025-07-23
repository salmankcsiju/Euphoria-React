import React from 'react';
import styled from 'styled-components';

import nike from "../Assets/nike.jpg";
import HM from "../Assets/H&M.jpg";
import levis from "../Assets/levis.jpg";
import UPSA from "../Assets/USPA.jpg";
import puma from "../Assets/puma.jpg";

function Brand() {
  return (
    <BrandSection>
      <BrandContainer>
        <BrandHead>
          <BrandHeading>Top Brands Deal</BrandHeading>
          <BrandSpan>
            Up To <HighlightSpan>60%</HighlightSpan> off on brands
          </BrandSpan>
        </BrandHead>

        <BrandItems>
          {[nike, HM, levis, UPSA, puma].map((logo, idx) => (
            <BrandItem key={idx}>
              <img className="brandImage" src={logo} alt={`brand-${idx}`} />
            </BrandItem>
          ))}
        </BrandItems>
      </BrandContainer>
    </BrandSection>
  );
}

export default Brand;

// Styled Components

const BrandSection = styled.section`
  width: 90%;
  margin: 50px auto;
`;

const BrandContainer = styled.div`
  padding: 50px 20px;
  background: #323232;
  border-radius: 12px;
  text-align: center;
`;

const BrandHead = styled.div`
  margin-bottom: 40px;
`;

const BrandHeading = styled.h2`
  font-family: 'Core Sans C', sans-serif;
  font-weight: 800;
  font-size: 3rem;
  color: #fff;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`;

const BrandSpan = styled.span`
  font-family: 'Causten', sans-serif;
  font-size: 1.2rem;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const HighlightSpan = styled.span`
  font-weight: 700;
  color: #fbd103;
`;

const BrandItems = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 0;
  margin: 40px auto 0;
`;

const BrandItem = styled.li`
  background: #fff;
  padding: 12px 20px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 1 150px;

  @media (max-width: 1024px) {
    flex: 0 1 30%;
  }

  @media (max-width: 768px) {
    flex: 0 1 45%;
  }

  @media (max-width: 480px) {
    flex: 0 1 80%;
  }

  img.brandImage {
    max-width: 100px;
    height: auto;
    object-fit: contain;
  }
`;
