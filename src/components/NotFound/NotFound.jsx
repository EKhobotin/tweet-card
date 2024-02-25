import { ButtonBack } from 'components/ButtonBack/ButtonBack';
import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <StyledWrapper>
      <ButtonBack />
      <StyledTitle>Page Not Found</StyledTitle>
    </StyledWrapper>
  );
};

export default NotFound;

const StyledTitle = styled.h1`
  text-align: center;
`;

const StyledWrapper = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 50px;
  align-items: center;
  height: 70vh;
`;
