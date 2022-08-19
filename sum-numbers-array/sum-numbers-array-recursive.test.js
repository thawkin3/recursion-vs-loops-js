import { sumNumbersArray } from './sum-numbers-array-recursive';

describe('sumNumbersArray', () => {
  it('sums all the numbers in an array', () => {
    const numbers = [1, 3, 8, 5, 7];
    expect(sumNumbersArray(numbers)).toBe(24);
  });

  it('returns the only item if the array only has one item', () => {
    const numbers = [42];
    expect(sumNumbersArray(numbers)).toBe(42);
  });

  it('returns 0 if the array is empty', () => {
    const numbers = [];
    expect(sumNumbersArray(numbers)).toBe(0);
  });
});
