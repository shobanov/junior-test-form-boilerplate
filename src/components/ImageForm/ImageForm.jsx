import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { successNotify } from '../../notifications';
import ImageListContext from '../../context';
import { createDate } from '../../utils';

import { ValidationError } from './ValidationError';
import { schemaWithDescription, schemaWithoutDescription } from './validation';
import {
  Button,
  CheckboxStyled,
  DescriptionContainer,
  Form,
  InputWrapper,
  Label,
  TextArea,
  Title,
} from './styles';
import { Input } from './Input';

export const ImageForm = () => {
  const { setImageList } = useContext(ImageListContext);
  const [isChecked, setIsChecked] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      isChecked ? schemaWithDescription : schemaWithoutDescription,
    ),
  });

  const onSubmit = ({ imageTitle, imageURL, description }) => {
    setImageList((oldArray) => [
      ...oldArray,
      {
        id: uuidv1(),
        created_at: createDate(),
        title: imageTitle,
        imgURL: imageURL,
        description,
      },
    ]);

    reset();
    setIsChecked(false);
    successNotify('Фото добавлено!');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer limit={1} />
      <InputWrapper>
        <Input
          title="Название фото"
          type="text"
          validationError={errors.imageTitle?.message}
          {...register('imageTitle')}
        />
        <Input
          title="Ссылка на фото"
          type="text"
          validationError={errors.imageURL?.message}
          {...register('imageURL')}
        />
      </InputWrapper>
      <Button type="submit">Добавить фото</Button>
      <DescriptionContainer>
        <Label>
          <CheckboxStyled
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <Title>Есть описание</Title>
        </Label>
        {isChecked && (
          <>
            <TextArea maxLength="80" {...register('description')} />
            <ValidationError errorMessage={errors.description?.message} />
          </>
        )}
      </DescriptionContainer>
    </Form>
  );
};
