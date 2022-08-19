export const factorial = (x) => {
  if (x < 0) {
    throw new Error('x must be greater than or equal to 0');
  }

  if (x === 0) {
    return 1;
  }

  let result = 1;

  while (x > 0) {
    result *= x;
    x--;
  }

  return result;
};
