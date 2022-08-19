import { factorial } from './factorial-recursive';

describe('factorial', () => {
  it('returns 1 for factorial(0)', () => {
    expect(factorial(0)).toBe(1);
  });

  it('returns the factorial for a number greater than 0', () => {
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
  });

  it('throws an error for a number less than 0', () => {
    expect(() => factorial(-1)).toThrow();
  });
});
