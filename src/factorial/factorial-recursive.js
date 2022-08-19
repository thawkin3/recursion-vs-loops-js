export const factorial = (x) => {
  if (x < 0) {
    throw new Error('x must be greater than or equal to 0');
  }

  if (x <= 1) {
    return 1;
  }

  return x * factorial(x - 1);
};
