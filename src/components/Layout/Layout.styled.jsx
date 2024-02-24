import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 100%;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  background-color: #91c1eb;
`;

export const Link = styled(NavLink)`
  padding: 10px 22px;
  border-radius: 4px;

  color: #483d8b;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;

  &.active {
    color: white;
    background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
    box-shadow: 0px 0px 7px rgba(27, 27, 27, 0.15);
    border-radius: 100px;
  }
`;
