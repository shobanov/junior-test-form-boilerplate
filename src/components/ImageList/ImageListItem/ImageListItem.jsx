import trash from '../../../assets/svg/trash.svg';

import {
  Date,
  Description,
  ImageButton,
  ImageContainer,
  ImageListItemContainer,
  Title,
} from './styles';

export const ImageListItem = (props) => {
  return (
    <ImageListItemContainer>
      <ImageButton
        src={trash}
        onClick={() => props.handleRemoveImageCard(props.id)}
      />
      {props.title && <Title>{props.title}</Title>}
      <Description>{props.description}</Description>
      <Date>
        <span>Дата добавления: </span>
        <time>{props.created_at}</time>
      </Date>
      <ImageContainer>
        <img src={props.imgURL} alt="img" />
      </ImageContainer>
    </ImageListItemContainer>
  );
};
