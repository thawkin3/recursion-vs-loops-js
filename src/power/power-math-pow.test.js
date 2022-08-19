import { power } from './power-math-pow';

describe('power', () => {
  it('returns 1 for an exponent of 0', () => {
    expect(power(1, 0)).toBe(1);
    expect(power(2, 0)).toBe(1);
    expect(power(3, 0)).toBe(1);
  });

  it('returns x for an exponent of 1', () => {
    expect(power(1, 1)).toBe(1);
    expect(power(2, 1)).toBe(2);
    expect(power(3, 1)).toBe(3);
    expect(power(4, 1)).toBe(4);
    expect(power(5, 1)).toBe(5);
  });

  it('returns the x^y for an exponent greater than 2', () => {
    expect(power(1, 2)).toBe(1);
    expect(power(2, 2)).toBe(4);
    expect(power(3, 2)).toBe(9);
    expect(power(4, 2)).toBe(16);
    expect(power(5, 2)).toBe(25);

    expect(power(1, 3)).toBe(1);
    expect(power(2, 3)).toBe(8);
    expect(power(3, 3)).toBe(27);
    expect(power(4, 3)).toBe(64);
    expect(power(5, 3)).toBe(125);
  });

  it('handles negative numbers for x', () => {
    expect(power(-1, 2)).toBe(1);
    expect(power(-2, 2)).toBe(4);
    expect(power(-3, 2)).toBe(9);
    expect(power(-4, 2)).toBe(16);
    expect(power(-5, 2)).toBe(25);

    expect(power(-1, 3)).toBe(-1);
    expect(power(-2, 3)).toBe(-8);
    expect(power(-3, 3)).toBe(-27);
    expect(power(-4, 3)).toBe(-64);
    expect(power(-5, 3)).toBe(-125);
  });

  it('handles exponents less than 0', () => {
    expect(power(3, -1)).toBe(1 / 3);
    expect(power(3, -2)).toBe(1 / 9);
  });
});
