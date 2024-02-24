import styled from 'styled-components';

export const UsersListContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const UsersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 1200px;
`;

export const UsersListWrapper = styled.section`
  margin: 0 auto;
  padding: 20px 0;
  background: linear-gradient(to bottom right, #c7daeb, #8ab9e3);
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
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
