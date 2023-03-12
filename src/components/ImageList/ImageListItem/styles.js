import styled from 'styled-components';

export const ImageButton = styled.button`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  background-color: transparent;
  border: none;
`;

export const ImageListItemContainer = styled.li`
  max-width: 335px;
  border-radius: 10px;
  border: 2px solid #bdbdbd;
  position: relative;
  list-style: none;
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  margin: 10px 15px 15px;
  border-radius: 10px;
  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 1.1em;
  margin: 10px 30px 5px 15px;
`;

export const Description = styled.p`
  margin: 0 30px 5px 15px;
  font-weight: 500;
  font-size: 15px;
`;

export const Date = styled.p`
  color: grey;
  margin-left: 15px;
  & span {
    font-size: 0.9em;
    font-weight: 700;
  }
  & time {
    font-weight: 500;
    font-size: 13px;
    word-spacing: -1.5px;
  }
`;
