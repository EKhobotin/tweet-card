import React from 'react';
import { Oval } from 'react-loader-spinner';
import styled from 'styled-components';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
height: 100vh; 
`;
