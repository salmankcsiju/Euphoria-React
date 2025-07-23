import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { allProducts } from '../data/products';
import { useMemo } from 'react';

import meroonHoodi from '../Assets/Rectangle 10 1.png';
import blackHoodi from '../Assets/Rectangle 11 1.png';
import pinkHoodi from '../Assets/Rectangle 12.png';



function getRandomProducts(products, excludeId, count = 4) {
  return products
    .filter((p) => p.id !== excludeId)
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
}



 const spotlitslider = [
    {
      id:1,
      img:meroonHoodi,
    },
    {
      id:2,
      img:blackHoodi,
    },
    {
      id:3,
      img:pinkHoodi,
    },
  ];

const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = allProducts.find((item) => item.id === productId);
  const [active, setActive] = useState(null);
  const [activeTab, setActiveTab] = useState('description');
  const similarProducts = useMemo(() => {
  return getRandomProducts(allProducts, product.id);
}, [product.id]);





  if (!product) return <div>Product not found</div>;

  return (
    <Container>
      <Wrapper>
        <Left>
          <SliderSection>
            {spotlitslider.map(slide =>(
              <SliderImg
              key={slide.id}
              src={slide.img}
              />))}
              <ArrowSwitcher>
                <ArrowUp onClick={() => setActive("up")} active={active === "up"}>
                  <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      fillRule="evenodd" 
                      clipRule="evenodd" 
                      d="M8.20263 5.3157C7.94439 5.51259 7.57544 5.46286 7.37855 5.20462L4.44462 1.35651C4.37158 1.30816 4.26493 1.30816 4.19188 1.35651L1.25795 5.20462C1.06107 5.46286 0.692114 5.51259 0.433878 5.3157C0.175641 5.11881 0.125909 4.74986 0.322797 4.49163L3.26685 0.63024C3.30121 0.58518 3.3532 0.522818 3.42521 0.463149C3.93831 0.0379996 4.6982 0.0379996 5.2113 0.463149C5.28331 0.522818 5.3353 0.58518 5.36966 0.63024L8.31371 4.49163C8.5106 4.74986 8.46087 5.11881 8.20263 5.3157Z" 
                      fill={active === "up" ? "#fff" : "#3C4242"} 
                    />
                  </svg>
                </ArrowUp>

                <ArrowDown onClick={() => setActive("down")} active={active === "down"}>
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      fillRule="evenodd" 
                      clipRule="evenodd" 
                      d="M1.19868 0.600069C1.45691 0.40318 1.82586 0.452912 2.02275 0.711149L4.95668 4.55926C5.02973 4.60761 5.13638 4.60761 5.20942 4.55926L8.14335 0.711149C8.34024 0.452912 8.70919 0.40318 8.96743 0.600069C9.22567 0.796957 9.2754 1.16591 9.07851 1.42414L6.13445 5.28553C6.1001 5.33059 6.04811 5.39295 5.97609 5.45262C5.463 5.87777 4.70311 5.87777 4.19001 5.45262C4.118 5.39295 4.06601 5.33059 4.03165 5.28553L1.0876 1.42414C0.890707 1.16591 0.94044 0.796957 1.19868 0.600069Z" 
                      fill={active === "down" ? "#fff" : "#3C4242"} 
                    />
                  </svg>
                </ArrowDown>
              </ArrowSwitcher>
          </SliderSection>
          <MainImage>
             <img  src={product.images} alt={product.name}/>
          </MainImage>
        </Left>

        <Right>
          <Breadcrumb>Shop &gt; {product.catogery} &gt; Top</Breadcrumb>
          <Title>{product.name}</Title>
          <Rating>
            <Stars>
              {'★★★★★'} <span>3.5</span>
            </Stars>
            <Comments>
              <ComntIcon>
                <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 5.40552C7.08579 5.40552 6.75 5.7413 6.75 6.15552C6.75 6.56973 7.08579 6.90552 7.5 6.90552V5.40552ZM15.5 6.90552C15.9142 6.90552 16.25 6.56973 16.25 6.15552C16.25 5.7413 15.9142 5.40552 15.5 5.40552V6.90552ZM7.5 9.40552C7.08579 9.40552 6.75 9.7413 6.75 10.1555C6.75 10.5697 7.08579 10.9055 7.5 10.9055V9.40552ZM11.5 10.9055C11.9142 10.9055 12.25 10.5697 12.25 10.1555C12.25 9.7413 11.9142 9.40552 11.5 9.40552V10.9055ZM21.282 14.0635L21.9503 14.404V14.404L21.282 14.0635ZM20.408 14.9375L20.7485 15.6058L20.408 14.9375ZM20.408 1.3735L20.7485 0.70525L20.7485 0.70525L20.408 1.3735ZM21.282 2.24754L21.9503 1.90704V1.90704L21.282 2.24754ZM2.59202 1.3735L2.93251 2.04176L2.93251 2.04176L2.59202 1.3735ZM1.71799 2.24754L2.38624 2.58803L2.38624 2.58803L1.71799 2.24754ZM2.70734 18.5416L3.14003 19.1542L3.14011 19.1542L2.70734 18.5416ZM6.66989 15.742L6.23712 15.1295H6.23712L6.66989 15.742ZM1.59027 18.6331L2.20486 18.2032H2.20486L1.59027 18.6331ZM2.60335 18.6038L2.2683 17.9328L2.26829 17.9328L2.60335 18.6038ZM1.92692 18.8411L1.8173 19.5831H1.8173L1.92692 18.8411ZM2.66983 18.5675L2.26547 17.9358L2.26536 17.9359L2.66983 18.5675ZM2.64376 18.5831L2.2785 17.928L2.27845 17.9281L2.64376 18.5831ZM7.76828 15.1895L7.90589 15.9267L7.90589 15.9267L7.76828 15.1895ZM7.30048 15.3381L7.61351 16.0196L7.61352 16.0196L7.30048 15.3381ZM7.5 6.90552H15.5V5.40552H7.5V6.90552ZM7.5 10.9055H11.5V9.40552H7.5V10.9055ZM4.7 1.90552H18.3V0.405518H4.7V1.90552ZM20.75 4.35552V11.9555H22.25V4.35552H20.75ZM20.75 11.9555C20.75 12.5279 20.7494 12.9122 20.7252 13.208C20.7018 13.4952 20.6599 13.6324 20.6138 13.723L21.9503 14.404C22.1221 14.0667 22.1892 13.7101 22.2203 13.3302C22.2506 12.9591 22.25 12.5032 22.25 11.9555H20.75ZM18.3 15.9055C18.8477 15.9055 19.3035 15.9061 19.6747 15.8758C20.0546 15.8447 20.4112 15.7776 20.7485 15.6058L20.0675 14.2693C19.9769 14.3154 19.8396 14.3573 19.5525 14.3808C19.2566 14.4049 18.8724 14.4055 18.3 14.4055V15.9055ZM20.6138 13.723C20.4939 13.9582 20.3027 14.1494 20.0675 14.2693L20.7485 15.6058C21.2659 15.3421 21.6866 14.9214 21.9503 14.404L20.6138 13.723ZM18.3 1.90552C18.8724 1.90552 19.2566 1.9061 19.5525 1.93028C19.8396 1.95373 19.9769 1.99562 20.0675 2.04176L20.7485 0.70525C20.4112 0.533406 20.0546 0.466295 19.6747 0.435257C19.3035 0.404934 18.8477 0.405518 18.3 0.405518V1.90552ZM22.25 4.35552C22.25 3.80784 22.2506 3.35198 22.2203 2.98085C22.1892 2.60096 22.1221 2.24431 21.9503 1.90704L20.6138 2.58803C20.6599 2.67859 20.7018 2.81587 20.7252 3.103C20.7494 3.39887 20.75 3.78309 20.75 4.35552H22.25ZM20.0675 2.04176C20.3027 2.1616 20.4939 2.35283 20.6138 2.58803L21.9503 1.90704C21.6866 1.3896 21.2659 0.968902 20.7485 0.70525L20.0675 2.04176ZM4.7 0.405518C4.15232 0.405518 3.69646 0.404934 3.32533 0.435257C2.94544 0.466295 2.58879 0.533406 2.25153 0.70525L2.93251 2.04176C3.02307 1.99562 3.16035 1.95373 3.44748 1.93028C3.74336 1.9061 4.12757 1.90552 4.7 1.90552V0.405518ZM2.25 4.35552C2.25 3.78309 2.25058 3.39887 2.27476 3.103C2.29822 2.81587 2.3401 2.67859 2.38624 2.58803L1.04973 1.90704C0.877888 2.24431 0.810777 2.60096 0.779739 2.98085C0.749417 3.35198 0.75 3.80784 0.75 4.35552H2.25ZM2.25153 0.70525C1.73408 0.968902 1.31338 1.3896 1.04973 1.90704L2.38624 2.58803C2.50608 2.35283 2.69731 2.1616 2.93251 2.04176L2.25153 0.70525ZM18.3 14.4055H8.51639V15.9055H18.3V14.4055ZM3.14011 19.1542L7.10267 16.3545L6.23712 15.1295L2.27457 17.9291L3.14011 19.1542ZM0.75 17.8611C0.75 18.0608 0.749252 18.2622 0.764406 18.4278C0.77946 18.5923 0.817386 18.8366 0.97568 19.0629L2.20486 18.2032C2.27289 18.3005 2.26568 18.3731 2.25816 18.291C2.25499 18.2564 2.25258 18.2065 2.2513 18.1315C2.25002 18.0569 2.25 17.9701 2.25 17.8611H0.75ZM2.26829 17.9328C2.18118 17.9763 2.11175 18.0107 2.0523 18.0387C1.99244 18.0669 1.9529 18.0838 1.92597 18.0939C1.86294 18.1177 1.92374 18.0825 2.03654 18.0992L1.8173 19.5831C2.07835 19.6216 2.30366 19.5546 2.45491 19.4976C2.6054 19.4409 2.77432 19.3568 2.93841 19.2748L2.26829 17.9328ZM0.975679 19.0629C1.17274 19.3447 1.47716 19.5328 1.8173 19.5831L2.03654 18.0992C2.10457 18.1092 2.16545 18.1469 2.20486 18.2032L0.975679 19.0629ZM2.25 17.8611V4.35552H0.75V17.8611H2.25ZM2.27465 17.929C2.26983 17.9324 2.26637 17.9349 2.26338 17.937C2.26043 17.939 2.25887 17.9401 2.25804 17.9407C2.25672 17.9416 2.26002 17.9393 2.26547 17.9358L3.0742 19.1991C3.10147 19.1817 3.12688 19.1635 3.14003 19.1542L2.27465 17.929ZM2.9384 19.2748C2.95307 19.2675 2.9808 19.2539 3.00907 19.2381L2.27845 17.9281C2.28396 17.925 2.28751 17.9232 2.28623 17.9238C2.28538 17.9243 2.28372 17.9251 2.28053 17.9267C2.27732 17.9283 2.27354 17.9302 2.2683 17.9328L2.9384 19.2748ZM2.26536 17.9359C2.26971 17.9331 2.27403 17.9305 2.2785 17.928L3.00902 19.2381C3.03112 19.2258 3.05295 19.2127 3.0743 19.1991L2.26536 17.9359ZM8.51639 14.4055C8.16604 14.4055 7.8965 14.4026 7.63067 14.4522L7.90589 15.9267C8.00388 15.9084 8.1118 15.9055 8.51639 15.9055V14.4055ZM7.10266 16.3545C7.4331 16.1211 7.52294 16.0612 7.61351 16.0196L6.98745 14.6565C6.7417 14.7694 6.52325 14.9273 6.23712 15.1295L7.10266 16.3545ZM7.63067 14.4522C7.40869 14.4936 7.19265 14.5623 6.98745 14.6565L7.61352 16.0196C7.70679 15.9768 7.80499 15.9456 7.90589 15.9267L7.63067 14.4522Z" fill="#807D7E"/>
                </svg>
              </ComntIcon> 
              <P>120 comments </P>
              </Comments>
          </Rating>

          <Section>
            <Label>Select Size</Label>
            <SizeGuide>Size Guide →</SizeGuide>
          </Section>
          <SizeOptions>
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <Size key={size}>{size}</Size>
            ))}
          </SizeOptions>

          <Label>Colours Available</Label>
          <ColorOptions>
            <Color bg="#000" />
            <Color bg="#FDD835" />
            <Color bg="#F48FB1" />
            <Color bg="#C2185B" />
          </ColorOptions>

          <Actions>
            <AddToCart>Add to cart</AddToCart>
            <Price>{product.price}</Price>
          </Actions>

          <Features>
            <Feature>
              <Icon>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 4.75H16M4 12.25H7M10 12.25H13M3.4 16H13.6C14.4401 16 14.8601 16 15.181 15.7956C15.4632 15.6159 15.6927 15.329 15.8365 14.9762C16 14.5751 16 14.0501 16 13V4C16 2.9499 16 2.42485 15.8365 2.02377C15.6927 1.67096 15.4632 1.38413 15.181 1.20436C14.8601 1 14.4401 1 13.6 1H3.4C2.55992 1 2.13988 1 1.81901 1.20436C1.53677 1.38413 1.3073 1.67096 1.16349 2.02377C1 2.42485 1 2.9499 1 4V13C1 14.0501 1 14.5751 1.16349 14.9762C1.3073 15.329 1.53677 15.6159 1.81901 15.7956C2.13988 16 2.55992 16 3.4 16Z" stroke="#3C4242" stroke-width="1.1" stroke-linecap="round"/>
                </svg>
              </Icon> 
              <p>Secure payment</p>
            </Feature>
            <Feature >
               <Icon>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6349 17H5.36505C4.36129 17 3.54758 16.2007 3.54758 15.2147V8.57964C3.54758 8.06342 2.91221 7.8049 2.54061 8.16992C2.20135 8.50317 1.62054 8.32034 1.54167 7.85546L1.0248 4.80914C0.902057 4.08569 1.24222 3.36209 1.88247 2.98474L5.19652 1.03149C5.29304 0.974606 5.41751 0.99658 5.48783 1.08292C7.2884 3.29381 10.7116 3.29381 12.5122 1.08292C12.5825 0.99658 12.707 0.974606 12.8035 1.03149L16.1175 2.98474C16.7578 3.36209 17.0979 4.08569 16.9752 4.80914L16.4583 7.85546C16.3795 8.32034 15.7986 8.50317 15.4594 8.16992C15.0878 7.8049 14.4524 8.06342 14.4524 8.57964V15.2147C14.4524 16.2007 13.6387 17 12.6349 17Z" stroke="#3C4242" stroke-width="1.1"/>
                </svg>
                </Icon> 
              <p>Size & Fit</p>
            </Feature>
            <Feature>
              <Icon>
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.8 12.6667V1.46667C11.8 1.20893 11.5985 1 11.35 1H1.45C1.20147 1 1 1.20893 1 1.46667V12.6667C1 12.9244 1.20147 13.1333 1.45 13.1333H2.8M11.8 12.6667C11.8 12.9244 11.5985 13.1333 11.35 13.1333H6.4M11.8 12.6667V4.26667C11.8 4.00893 12.0015 3.8 12.25 3.8H15.2136C15.333 3.8 15.4474 3.84917 15.5318 3.93668L18.8682 7.39665C18.9526 7.48417 19 7.60287 19 7.72663V12.6667C19 12.9244 18.7985 13.1333 18.55 13.1333H17.2M11.8 12.6667C11.8 12.9244 12.0015 13.1333 12.25 13.1333H13.6M2.8 13.1333C2.8 14.1643 3.60589 15 4.6 15C5.59411 15 6.4 14.1643 6.4 13.1333M2.8 13.1333C2.8 12.1024 3.60589 11.2667 4.6 11.2667C5.59411 11.2667 6.4 12.1024 6.4 13.1333M13.6 13.1333C13.6 14.1643 14.4059 15 15.4 15C16.3941 15 17.2 14.1643 17.2 13.1333M13.6 13.1333C13.6 12.1024 14.4059 11.2667 15.4 11.2667C16.3941 11.2667 17.2 12.1024 17.2 13.1333" stroke="#3C4242" stroke-width="1.1"/>
                </svg>
              </Icon>
              <p>Free shipping</p>
            </Feature>
            <Feature>
              <Icon>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.44444 15.2222C5.44444 16.2041 4.64851 17 3.66667 17C2.68483 17 1.88889 16.2041 1.88889 15.2222C1.88889 14.2404 2.68483 13.4444 3.66667 13.4444C4.64851 13.4444 5.44444 14.2404 5.44444 15.2222ZM5.44444 15.2222H12.5556C13.5374 15.2222 14.3333 14.4263 14.3333 13.4444V9.88889M12.5556 2.77778C12.5556 3.75962 13.3515 4.55556 14.3333 4.55556C15.3152 4.55556 16.1111 3.75962 16.1111 2.77778C16.1111 1.79594 15.3152 1 14.3333 1C13.3515 1 12.5556 1.79594 12.5556 2.77778ZM12.5556 2.77778H5.44444C4.4626 2.77778 3.66667 3.57372 3.66667 4.55556V8.11111M17 11.6667L14.6476 9.13983C14.474 8.95339 14.1926 8.95339 14.0191 9.13983L11.6667 11.6667M6.33333 6.33333L3.98094 8.86017C3.80737 9.04661 3.52596 9.04661 3.3524 8.86017L1 6.33333" stroke="#3C4242" stroke-width="1.1" stroke-linecap="round"/>
                </svg>
              </Icon>
              <p>Free Shipping & Returns</p>
            </Feature>
          </Features>
        </Right>
        <BottomCenter>
            <CenterWrapper>
              <CenterLeft>
                <SectionHead>
                  <svg width="6" height="30" viewBox="0 0 6 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="6" height="30" rx="3" fill="#8A33FD" />
                  </svg>
                  <h2>Product Description</h2>
                </SectionHead>
                <SectionSub>
                  <Tab onClick= {()=> setActiveTab('description')} active={activeTab === 'description'}>
                    Description
                  </Tab>
                  <Tab onClick={()=>setActiveTab('comments')} active={activeTab === 'comments'} >
                    User comments
                    <CountBubble active>21</CountBubble>
                  </Tab>
                  <Tab onClick={()=> setActiveTab('Qa')} active={activeTab === 'Qa'}>
                    Question & Answer
                    <CountBubble>4</CountBubble>
                  </Tab>
                </SectionSub>
                <Content>
                  { activeTab === 'description' && (
                    <p>
                      100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.
                    </p>
                  )}
                  { activeTab === 'comments' && (
                    <p>
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                  )}
                  { activeTab === 'Qa' && (
                    <p>
                      Here are Q&A entries..
                    </p>
                  )}
                </Content>
              </CenterLeft>
              <CenterRight>
                <RightWrapper>
                  <TableUl>
                    <TableLi>
                      <span>Fabric</span>
                      <p>Bio-washed Cotton</p>
                    </TableLi>
                    <TableLi>
                      <span>Pattern</span>
                      <p>Printed</p>
                    </TableLi>
                    <TableLi>
                      <span>Fit</span>
                      <p>Regular-fit</p>
                    </TableLi>
                    <TableLi>
                      <span>Neck</span>
                      <p>Round Neck</p>
                    </TableLi>
                    <TableLi>
                      <span>Sleeve</span>
                      <p>Half-sleeves</p>
                    </TableLi>
                    <TableLi>
                      <span>Style</span>
                      <p>Casual Wear</p>
                    </TableLi>
                  </TableUl>
                </RightWrapper>
              </CenterRight>
            </CenterWrapper>
        </BottomCenter>
        <SimilarProductSection>
          <ProductsWrapper>
            <ProductsHead>
              <svg width="6" height="30" viewBox="0 0 6 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="6" height="30" rx="3" fill="#8A33FD" />
              </svg>
              <h2>Similar Products</h2>
            </ProductsHead>

            <ProductsSection>
              {similarProducts.map(item => (
                <ProductCard to={`/product/${item.id}`} key={item.id}>
                  <img src={item.images} alt={item.name} />
                  <ProductInfo>
                <TopInfo>
                  <ProductName>{item.name}</ProductName>
                </TopInfo>
                <BottomInfo>
                  <BrandName>{item.brand}</BrandName>
                  <PriceButton>
                    <SimilarPrice>{item.price}</SimilarPrice>
                  </PriceButton>
                </BottomInfo>
              </ProductInfo>
                </ProductCard>
              ))}
            </ProductsSection>
          </ProductsWrapper>
        </SimilarProductSection>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;  
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #F6F6F6;
  position: relative;

  @media (max-width: 1024px) {
    margin-left:40px ;
  }
  @media (max-width: 426px ){
    width: 100%;
    margin-left: 0;
  }
`;

const SliderSection = styled.div`
  width: 75px;  
  opacity: 1;
  margin-left: 80px;
  
  @media (max-width: 426px ){
    width: 70px;
    margin-left: 5px;
  }
`;
const SliderImg = styled.img`
  display: grid;
  gap: 24.34px;
  margin-bottom: 24px;
  
`;
const ArrowSwitcher = styled.div`
  place-items: center;
  display  : grid;
  gap: 10px;
`;
const ArrowUp = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.active ? "#3C4242" : "#fff")};
  border: solid 1px black;
  border-radius: 50%;
  cursor: pointer;
`;
const ArrowDown = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.active ? "#3C4242" : "#fff")};
  border: solid 1px black;
  border-radius: 50%;
  cursor: pointer;
`;

const MainImage = styled.div`
  img {
    width: 520px;
    height: 785px;
    top: 108px;
    opacity: 1;
    object-fit: cover;

    @media (max-width: 480px) {
      width: 100%;
      height: 500px;
      
    }
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;

  @media (max-width: 1024px) {
    margin-left:40px ;
  }
`;

const Breadcrumb = styled.p`
  font-family: 'Causten';
  font-weight: 500;
  font-style: Medium;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #807D7E;
`;

const Title = styled.h2`
  font-family: sans-serif;
  font-weight: 600;
  font-style: 65 Bold;
  font-size: 34px;
  line-height: 140%;
  letter-spacing: 2%;
  color:#3C4242 ;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Stars = styled.div`
  color: #fbc02d;
  font-size: 16px;
  span {
    margin-left: 5px;
    color: #333;
  }
`;

const Comments = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  margin-left: 40px;
  gap: 10px;
`;
const ComntIcon = styled.div`

`;
const P = styled.p`
  font-family: 'Causten';
  font-weight: 500;
  font-style: Medium;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #807D7E;
`;
const Section = styled.div`
  display: flex;
  gap: 30px;
`;

const Label = styled.p`
  font-family: 'Causten';
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #3F4646;
`;

const SizeGuide = styled.p`
  font-family: 'Causten';
  font-weight: 500;
  font-style: Medium;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #807D7E;
  cursor: pointer;
`;

const SizeOptions = styled.div`
  display: flex;
  gap: 10px;
`;

const Size = styled.button`
  padding: 8px 14px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
  border-radius: 6px;
`;

const ColorOptions = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.bg};
  border: 2px solid #ccc;
  cursor: pointer;
`;

const Actions = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  border-bottom: 1px solid black;
  padding-bottom: 40px;
`;

const AddToCart = styled.button`
  background: #8a33fd;
  color: #fff;
  padding: 12px 40px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  width: 199px;
  height: 46px;
  opacity: 1;
  gap: 12px;
  border-radius: 8px;
  font-family: 'Causten';
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  vertical-align: middle;
`;

const Price = styled.button`
  font-size: 20px;
  font-weight: bold;
  padding: 12px 40px;
  border: 1px solid #3C4242;
  width: 138px;
  height: 46px;
  left: 224px;
  opacity: 1;
  gap: 12px;
  border-width: 1px;
  border-radius: 8px;
  text-align: center;
  display: flex;
  justify-content: center;
  background: transparent;
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const Feature = styled.div`
  font-size: 14px;
  color: #333;
  display: flex;
  gap: 10px;
`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  background: #F6F6F6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BottomCenter = styled.div`
  width: 90%;
  margin: 60px auto;
  height: auto;
`;
const CenterWrapper = styled.div`
  width:100%;
  display: flex;

  @media (max-width: 769px){
    flex-direction: column;
  }
  
  `;
const CenterLeft = styled.div`
  width: 50%;

  @media (max-width: 769px){
    width: 95%;
    margin : 0 auto;
  }
`;
const SectionHead = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 2rem;

  h2 {
    font-family: sans-serif;
    font-weight: 600;
    font-style: 65 Bold;
    font-size: 28px;
    line-height: 33.5px;
    letter-spacing: 2%;
    color: #3C4242;


    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
    @media (max-width: 426px) {
      font-size: 35px;
    }
  }

  svg {
    height: 24px;
    width: 5px;
  }
`;
const SectionSub = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-bottom: 50px;
`;
const Tab = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: ${(props) => (props.active ? '#2d2d2d' : '#888')};
  position: relative;
  padding-bottom: 6px;
  cursor: pointer;

  &:after {
    content: '';
    display: ${(props) => (props.active ? 'block' : 'none')};
    height: 2px;
    width: 75%;
    background-color: #2d2d2d;
    position: absolute;
    bottom: -10px;
    left: 0;
  }

  display: flex;
  align-items: center;
  gap: 8px;
`;
const CountBubble = styled.span`
  font-size: 12px;
  background-color: ${(props) => (props.active ? '#a435f0' : '#3c4242')};
  color: #fff;
  padding: 2px 8px;
  border-radius: 12px;
`;
const Content = styled.div`
  font-size: 15px;
  color: #6f6f6f;
  line-height: 1.6;
`;
const CenterRight = styled.div`
  width: 50%;
  margin-left: 40px;
  @media (max-width: 769px){
    width: 95%;
    margin : 0 auto;
  }
  @media (max-width: 426px) {
    width: 100%;
  }
`;
const RightWrapper = styled.div`
`;
const TableUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-template-rows: repeat(2, auto);   
  gap: 0;
  border-radius: 16px;
  overflow: hidden;
  background: #F6F6F6;
  border: 1px solid #eee;

  @media (max-width: 426px) {
    grid-template-columns: repeat(2, 1fr);
    border: 1px solid #ddd;

  }
`;
const TableLi = styled.div`
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 80px;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;


  &:nth-child(3n) {
    border-right: none;
  }

  &:nth-child(n+4) {
    border-bottom: none;
  }

  span {
    font-family: 'Causten';
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 2%;
    color: #807D7E;
  }

  p {
  font-family: 'Causten';
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 2%;
  color: #3C4242;
  }
  @media (max-width: 426px) {
    border: 1px solid #ddd;

  }
`;

const SimilarProductSection = styled.div`
  width: 90%;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const ProductsWrapper = styled.div`
  width: 100%;
  padding: 0 20px;

  @media (max-width: 426px) {
    padding: 0;
  }
`;
const ProductsHead = styled.div`
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


    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
    @media (max-width: 426px) {
      font-size: 35px;
    }

  }
`;


const ProductsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled(Link)`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  text-align: center;
  transition: 0.2s ease;
  text-decoration: none;
  color: inherit;

  * {
    text-decoration: none !important;
    color: inherit;
  }

  &:hover {
    transform: translateY(-4px);
  }

  img {
    width: 100%;
    height: 370px;
    object-fit: cover;
  }
`;
const ProductInfo = styled.div`
  padding: 0.8rem 0.5rem;
  text-align: left;
  text-decoration: none;
  color: inherit;
`;

const TopInfo = styled.div``;

const BottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductName = styled.h3`
  font-weight: 600;
  color: #333;
  margin-bottom: 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;

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

  @media (max-width: 480px) {
    padding: 4px 10px;
  }
`;

const SimilarPrice = styled.p`
  font-family: 'Causten', sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;


export default ProductDetail;
