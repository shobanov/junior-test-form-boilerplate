import { ErrorStyled } from './styles';

export function ValidationError({ errorMessage }) {
  return <ErrorStyled>{errorMessage}</ErrorStyled>;
}
