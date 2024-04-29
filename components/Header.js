import Link from 'next/link';
import styled from 'styled-components';
import Center from '@/components/Center';
import { colors } from '@/lib/colors';
import { useContext, useState } from 'react';
import { CartContext } from '@/components/CartContext';
import BarsIcon from '@/components/icons/Bars';
import SearchIcon from '@/components/icons/SearchIcon';

const StyledHeader = styled.header`
  background-color: ${colors.secondary};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Logo = styled(Link)`
  color: ${colors.text};
  text-decoration: none;
  position: relative;
  z-index: 3;

  /* Variant styles */
  &:hover {
    background:transparent;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff,
      0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;,   
  }
  /* Transition properties */
  transition: color 0.3s ease, text-shadow 0.3s ease;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  display: ${(props) => (props.mobile_nav_active === true ? 'block' : 'none')};
  gap: 15px;
  position: fixed;
  background: ${colors.secondary};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;

  transition: opacity 0.3s ease; /* Add transition here */

  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  display: block;
  color: ${colors.text};
  text-decoration: none;
  min-width: 30px;
  padding: 10px 0;
  svg {
    height: 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 0;
  }

  /* Variant styles */
  &:hover {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff,
      0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;,   
  }
  /* Transition properties */
  transition: color 0.3s ease, text-shadow 0.3s ease;
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: black;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const SideIcons = styled.div`
  display: flex;
  align-items: center;
  a {
    display: inline-block;
    min-width: 20px;
    color: white;
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

const Name = styled.span`
  color: ${colors.text};
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobile_nav_active, setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}>
            <Name>Hey</Name>
            Lisen
          </Logo>{' '}
          {/*componente Link */}
          <StyledNav mobile_nav_active={mobile_nav_active}>
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/products'}>All products</NavLink>
            <NavLink href={'/categories'}>Categories</NavLink>
            <NavLink href={'/account'}>Account</NavLink>
            <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>
          <SideIcons>
            <Link href={'/search'}>
              <SearchIcon />
            </Link>
            <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
              <BarsIcon />
            </NavButton>
          </SideIcons>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
