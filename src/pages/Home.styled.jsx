import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeSection = styled.section`
  padding: 80px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #c7daeb, #8ab9e3);
`;

export const LinkImg = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h1 {
    text-transform: uppercase;
    color: #d98027;
    margin-bottom: 40px;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
export const Img = styled.img`
  border-radius: 10%;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.5);
  &:hover {
    transform: scale(1.1);
  }
`;
