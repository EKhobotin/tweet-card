import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  margin: 0 auto;
`;
export const Label = styled.label`
  margin: 10px auto;
`;
export const Button = styled.button`
  margin: 0 auto;
  border-radius: 10px;
  border: none;
  height: 40px;
  background-color: #4169e1;
  padding: 5px;
  color: #ffffff;

  &:hover,
  &:focus {
    background-color: #55d6d2;
    cursor: pointer;
    border: 1px black solid;
  }
`;
export const Input = styled.input`
  margin-left: 5px;
  border: 1px solid #000000;
`;
