import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  &:nth-child(1) {
    margin-right: 15px;
    @media (max-width: 710px) {
      margin-right: 0;
    }
  }
`;

export const InputStyled = styled.input`
  height: 40px;
  border-radius: 8px;
  border: 1px solid #bdbdbd;
  width: 100%;
  text-indent: 5px;
  box-sizing: border-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-size: 1rem;
  color: #212529;
  &:focus {
    color: #212529;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.1rem rgba(158, 158, 158, 0.25);
  }
`;

export const Label = styled.label`
  margin-bottom: 0.25rem;
  display: block;
  font-weight: 500;
  color: #0f6bde;
`;
