import { GlobalStyles } from './globalStyles';
import { StyledRoot } from './StyledRoot';

export const Root = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <StyledRoot>{children}</StyledRoot>
    </>
  );
};
