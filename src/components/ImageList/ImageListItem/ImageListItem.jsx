import trash from '../../../assets/svg/trash.svg';
import imageNotAvailable from '../../../assets/Img_not_available.png';

import {
  Date,
  Description,
  ImageButton,
  ImageContainer,
  ImageListItemContainer,
  Title,
} from './styles';

export const ImageListItem = ({
  id,
  title,
  imgURL,
  created_at,
  description,
  handleRemoveImageCard,
}) => {
  const handleImageError = (e) => {
    e.target.src = imageNotAvailable;
  };

  return (
    <ImageListItemContainer>
      <ImageButton src={trash} onClick={() => handleRemoveImageCard(id)} />
      {title && <Title>{title}</Title>}
      <Description>{description}</Description>
      <Date>
        <span>Дата добавления: </span>
        <time>{created_at}</time>
      </Date>
      <ImageContainer>
        <img
          src={imgURL ? imgURL : imageNotAvailable}
          alt="img"
          onError={handleImageError}
        />
      </ImageContainer>
    </ImageListItemContainer>
  );
};
