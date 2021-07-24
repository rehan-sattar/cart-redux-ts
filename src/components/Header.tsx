import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.ul`
  background: ${p => p.theme.colors.primary};
  display: flex;
  margin-top: 0%;
  list-style-type: none;
  padding: 20px;
`;

const StyledNavLink = styled(NavLink)`
  color: ${p => p.theme.colors.neutral};
  text-decoration: none;
  margin: 0px 20px;
`;

export const Header: React.FC<{}> = () => {
  return (
    <nav>
      <NavWrapper>
        <li>
          <StyledNavLink
            to="/"
            exact
            className={'nav__item'}
            activeClassName="active">
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            to="/cart"
            className={'nav__item'}
            activeClassName="active">
            Cart
          </StyledNavLink>
        </li>
      </NavWrapper>
    </nav>
  );
};
