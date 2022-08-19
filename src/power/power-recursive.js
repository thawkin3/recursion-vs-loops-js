export const power = (x, y) => {
  if (y < 0) {
    throw new Error(
      'exponent must be greater than or equal to 0 (for the purposes of this example)'
    );
  }

  if (y === 0) {
    return 1;
  }

  return x * power(x, y - 1);
};
