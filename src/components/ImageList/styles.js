import styled from 'styled-components';

export const ImageListWrapper = styled.ul`
  border-top: 2px solid #bdbdbd;
  padding: 15px 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  grid-auto-rows: minmax(auto, auto);
  align-items: start;
  @media (max-width: 710px) {
    grid-template-columns: none;
    max-width: 85%;
    align-self: center;
  }
`;
