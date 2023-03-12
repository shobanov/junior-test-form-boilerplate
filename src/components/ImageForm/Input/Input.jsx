import { forwardRef } from 'react';

import { ValidationError } from '../ValidationError';

import { InputContainer, InputStyled, Label } from './styles';

export const Input = forwardRef((props, ref) => (
  <InputContainer>
    <Label>{props.title}</Label>
    <InputStyled {...props} ref={ref} />
    {props.validationError && (
      <ValidationError errorMessage={props.validationError} />
    )}
  </InputContainer>
));
