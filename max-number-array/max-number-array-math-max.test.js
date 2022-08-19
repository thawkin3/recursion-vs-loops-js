import { maxNumberArray } from './max-number-array-math-max';

describe('maxNumberArray', () => {
  it('identifies the correct maximum number in an array', () => {
    const numbers = [1, 3, 8, 5, 7];
    expect(maxNumberArray(numbers)).toBe(8);
  });

  it('returns the only item if the array only has one item', () => {
    const numbers = [42];
    expect(maxNumberArray(numbers)).toBe(42);
  });

  it('returns -Infinity if the array is empty', () => {
    const numbers = [];
    expect(maxNumberArray(numbers)).toBe(-Infinity);
  });
});
