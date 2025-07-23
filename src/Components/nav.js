import React, {useState, useEffect} from 'react';
import logo from '../Assets/Logo.svg';
import styled from 'styled-components';
import SearchIcon from '../Assets/search.svg';
import cart from '../Assets/cart.svg';
import heart from '../Assets/wishlist.svg';
import account from '../Assets/account.svg';




function NavBar() {
     const [menuOpen, setMenuOpen] = useState(false);
     const [searchOpen, setSearchOpen] = useState(false);
     const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) setSearchOpen(false);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
     

  return (
    <>
      <Nav>
        <Div className='NavBar' >
          <LogoImage  src={logo} />      
           <NavList>
            <li>Shop</li>
            <li>Men</li>
            <li>Women</li>
            <li>Combos</li>
            <li>Joggers</li>
            <li className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" fill="#333" />
                <rect y="11" width="24" height="2" rx="1" fill="#333" />
                <rect y="18" width="24" height="2" rx="1" fill="#333" />
              </svg>
            </li>
          </NavList>

          {menuOpen && (
            <MobileMenu>
              <li>Shop</li>
              <li>Men</li>
              <li>Women</li>
              <li>Combos</li>
              <li>Joggers</li>
            </MobileMenu>
          )}
          <SearchContainer
            onClick={() => {
              if (isMobile) setSearchOpen(!searchOpen);
            }}
            $expanded={searchOpen}
            $mobile={isMobile}
          >
            <FiSearch src={SearchIcon} alt="search" />
            <SearchInput
              type="text"
              placeholder="Search"
              $visible={searchOpen || !isMobile}
              readOnly={isMobile && !searchOpen}
            />
          </SearchContainer>
          <NavIcons>
            <Cartimg>  
              <NaviconImage src={heart} />
            </Cartimg>
            <Cartimg>
              <NaviconImage src={account}/>
            </Cartimg>
            <Cartimg>
              <NaviconImage src={cart}/>
            </Cartimg>
          </NavIcons>
        </Div>
      </Nav>
    </>
  );
}

const Nav = styled.div`
  border-bottom: 1px solid;`

const Div = styled.div`
  width: 90%;
  margin:0 auto;
  display:flex;
  justify-content: space-between;
  padding: 30px 0;

  
  @media (max-width: 1024px) {
    width: 95%;
  }
  
  @media (max-width: 426px) {
    justify-content: space-around;
    margin:0 40px;
  }
;`
const LogoImage = styled.img`
  width: 91px;
  height: 45px;
;`
const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;
  padding: 0;
  margin: 0;

  li {
    color: #807D7E;
    font-family: Causten;
    font-weight: 500;
    font-size: 22px;
    cursor: pointer;

    &:hover {
      color: #3C4242;
      font-weight: 700;
    }
  }

  .menu-icon {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    li:nth-child(-n+5) {
      display: none;
    }

    .menu-icon {
      display: block;
      margin-top: 10px;
    }
  }
`;

const MobileMenu = styled.ul`
  list-style: none;
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  background: white;
  padding: 20px;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

  li {
    padding: 12px 0;
    border-bottom: 1px solid #eee;
    color: #3C4242;
    font-family: 'Causten';
    font-size: 18px;
  }
`;


const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: #F6F6F6;
  border-radius: 8px;
  gap: 8px;
  cursor: pointer;
  height: 40px;
  width: ${({ $mobile, $expanded }) =>
    $mobile ? ($expanded ? '200px' : '40px') : '200px'};
  padding: ${({ $mobile, $expanded }) =>
    $mobile ? ($expanded ? '8px 12px' : '0') : '8px 12px'};
  justify-content: ${({ $mobile, $expanded }) =>
    $mobile ? ($expanded ? 'flex-start' : 'center') : 'flex-start'};
  transition: all 0.3s ease;
  overflow: hidden;

`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  font-size: 14px;
  flex: 1;
  color: #333;
  font-family: Causten;
  font-size: 16px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  width: ${({ $visible }) => ($visible ? '100%' : '0')};
  transition: opacity 0.3s ease, width 0.3s ease;
`;

const FiSearch = styled.img`
  width: 20px;
  height: 20px;
`;
const NavIcons = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
;`
const Cartimg = styled.div`
  width: 40px;
  height: 40px;
  background: #F6F6F6;
  border-radius: 6px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 426px) {
    display: none;
  }
  
;`
const NaviconImage = styled.img`
    width: 15px;
    height: 13.333333015441895px;
    top: 3.33px;
    left: 2.5px;
    opacity: 1;
    border-width: 1.5px;

  ;`

export default NavBar;