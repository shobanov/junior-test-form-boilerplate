import { useContext, useEffect } from 'react';

import ImageListContext from '../../context';
import { errorNotify, successNotify } from '../../notifications';
import { fetchSomeImageUrl } from '../../api';
import { createDate } from '../../utils';

import { ImageListItem } from './ImageListItem';
import { ImageListWrapper } from './styles';

export const ImageList = () => {
  const { imageList, setImageList } = useContext(ImageListContext);

  useEffect(() => {
    const fetchSomeImage = async () => {
      try {
        const response = await fetch(fetchSomeImageUrl);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.errors[0]);
        }

        const dataImageList = data.map((item) => ({
          id: item.id,
          created_at: createDate(item.created_at),
          title: item.description,
          imgURL: item.urls.small,
          description: item.alt_description,
        }));

        setImageList(dataImageList);
        successNotify('Фото получены!');
      } catch (e) {
        errorNotify(e.message);
      }
    };

    fetchSomeImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeImageCard = (imageId) => {
    const newState = imageList.filter((item) => item.id !== imageId);

    setImageList(newState);
  };

  return (
    <ImageListWrapper>
      {imageList.map((item) => (
        <ImageListItem
          key={item.id}
          handleRemoveImageCard={removeImageCard}
          title={item.title}
          id={item.id}
          created_at={item.created_at}
          imgURL={item.imgURL}
          description={item.description}
        />
      ))}
    </ImageListWrapper>
  );
};
