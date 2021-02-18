import React from 'react';
import { Nav, NavLogo, NavTitle, NavAvatar } from './navbar.styles';
import { FlexRow } from '../utils';

export const Navbar = () => {
  return (
    <Nav>
      <FlexRow aligment="center">
        <NavLogo src={'/assets/pharmacy.svg'} />
        <NavTitle>Pharma Inc</NavTitle>
      </FlexRow>

      <NavAvatar />
    </Nav>
  );
};
