export const createDate = (time) => {
  const date = time === undefined ? new Date() : new Date(time);
  const formatter = new Intl.DateTimeFormat('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return formatter.format(date);
};
