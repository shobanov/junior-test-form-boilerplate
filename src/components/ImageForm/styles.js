import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  align-items: center;
  height: 250px;
  max-width: 100%;
  & button {
    @media (max-width: 710px) {
      align-self: center;
      margin-top: 45px;
    }
  }
  @media (max-width: 710px) {
    height: 350px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 40px;
  @media (max-width: 710px) {
    width: 80%;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 100px;
  }
`;

export const Button = styled.button`
  line-height: 1em;
  background-color: #0f6bde;
  align-self: flex-end;
  height: 40px;
  width: 180px;
  font-weight: 600;
  font-size: 0.9em;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: #0077e6;
  }
  &:active {
    background-color: #004280;
  }
`;

export const DescriptionContainer = styled.div`
  position: absolute;
  top: 90px;
  left: 0;
  width: 49%;
  height: 60px;
  @media (max-width: 710px) {
    top: 160px;
    margin-left: 65px;
  }
  @media (max-width: 450px) {
    margin-left: 45px;
    width: 70%;
  }
`;

export const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  overflow: hidden;
  outline: none;
  resize: none;
  font-size: 1em;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #bdbdbd;
  margin-top: 5px;
`;

export const Label = styled.label`
  align-self: flex-start;
`;

export const CheckboxStyled = styled.input.attrs({ type: 'checkbox' })`
  vertical-align: middle;
`;

export const Title = styled.span`
  margin-left: 5px;
`;
