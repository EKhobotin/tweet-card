import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinckBack = styled(Link)`
  display: block;
  width: 120px;
  text-align: center;
  margin: 0 auto;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: #ffffff;
  background-color: #1a3652;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: #0a2138;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;
