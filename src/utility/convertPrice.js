export default price => {
  const kurs = 12100;
  const sum = kurs * price;
  const cost = sum * 2;

  return {
    sum,
    cost,
  };
};