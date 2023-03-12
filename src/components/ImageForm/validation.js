import { object, string } from 'yup';

export const schemaWithDescription = object({
  imageTitle: string()
    .min(2, 'Должно быть не менее 2-ух символов!')
    .max(50, 'Должно быть не более 50-ти символов!')
    .required('Поле не должно быть пустым!'),
  imageURL: string()
    .min(5, 'Должно быть не менее 5-ти символов!')
    .required('Поле не должно быть пустым!'),
  description: string()
    .min(5, 'Должно быть не менее 5-ти символов!')
    .max(80, 'Должно быть не более 80-ти символов!')
    .required('Поле не должно быть пустым!'),
}).required();

export const schemaWithoutDescription = object({
  imageTitle: string()
    .min(2, 'Должно быть не менее 2-ух символов!')
    .max(50, 'Должно быть не более 50-ти символов!')
    .required('Поле не должно быть пустым!'),
  imageURL: string()
    .min(5, 'Должно быть не менее 5-ти символов!')
    .required('Поле не должно быть пустым!'),
}).required();
