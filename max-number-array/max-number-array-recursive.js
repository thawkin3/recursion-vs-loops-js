export const maxNumberArray = (numbers) => {
  if (numbers.length <= 1) {
    return numbers[0];
  }

  const numberA = numbers[0];
  const numberB = maxNumberArray(numbers.slice(1));

  return numberA > numberB ? numberA : numberB;
};
