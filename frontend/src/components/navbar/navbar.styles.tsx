import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  height: 70px;
  justify-content: space-between;
  padding: 10px 1em;
  background: #ffffff;
`;

export const NavLogo = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
`;

export const NavTitle = styled.h1`
  font-weight: bold;
  font-size: 16px;
`;

export const NavAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background: #b4b4b4;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  cursor: pointer;
`;
