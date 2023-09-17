import { describe, test, expect } from 'vitest'
import { 
  customPower,
  customPower2,
  isPrimeNumber,
  isPrimeNumber2,
  isPrimeNumberForLoop2 
} from './index'

describe('customPower',() => {
  test('test custom power (1, 100)', () => {
    expect(customPower(1, 100)).toBe(1);
  })

  test('test custom power (2, 3)', () => {
    expect(customPower(2, 3)).toBe(8);
  })

  test('test custom power (2, 10)', () => {
    expect(customPower(2, 10)).toBe(1024);
  })

  test('test custom power (3, 3)', () => {
    expect(customPower(3, 3)).toBe(27);
  })

  test('test custom power (25, 25)', () => {
    expect(customPower(25, 25)).toBe(88817841970012530000000000000000000);
  })
});

describe('customPower2',() => {
  test('test custom power (1, 100)', () => {
    expect(customPower2(1, 100)).toBe(1);
  })

  test('test custom power (2, 3)', () => {
    expect(customPower2(2, 3)).toBe(8);
  })

  test('test custom power (2, 10)', () => {
    expect(customPower2(2, 10)).toBe(1024);
  })

  test('test custom power (3, 3)', () => {
    expect(customPower2(3, 3)).toBe(27);
  })

  test('test custom power (25, 25)', () => {
    expect(customPower2(25, 25)).toBe(88817841970012530000000000000000000);
  })
});

describe('isPrimeNumber' , () => {
  test('test check if prime number (2) -> true', () => {
    expect(isPrimeNumber(2)).toBe(true);
  })

  test('test check if prime number (3) -> true', () => {
    expect(isPrimeNumber(3)).toBe(true);
  })

  test('test check if prime number (20) -> false', () => {
    expect(isPrimeNumber(20)).toBe(false);
  })

  test('test check if prime number (8001) -> false', () => {
    expect(isPrimeNumber(8001)).toBe(false);
  })

  test('test check if prime number (293) -> true', () => {
    expect(isPrimeNumber(293)).toBe(true);
  })

  test('test check if prime number (983) -> true', () => {
    expect(isPrimeNumber(983)).toBe(true);
  })

  test('test check if prime number (5821) -> true', () => {
    expect(isPrimeNumber(5821)).toBe(true);
  })

  test('test check if prime number (32831) -> true', () => {
    expect(isPrimeNumber(32831)).toBe(true);
  })
});

describe('isPrimeNumberForLoop2' , () => {
  test('test check if prime number (2) -> true', () => {
    expect(isPrimeNumberForLoop2(2)).toBe(true);
  })

  test('test check if prime number (3) -> true', () => {
    expect(isPrimeNumberForLoop2(3)).toBe(true);
  })

  test('test check if prime number (20) -> false', () => {
    expect(isPrimeNumberForLoop2(20)).toBe(false);
  })

  test('test check if prime number (8001) -> false', () => {
    expect(isPrimeNumberForLoop2(8001)).toBe(false);
  })

  test('test check if prime number (293) -> true', () => {
    expect(isPrimeNumberForLoop2(293)).toBe(true);
  })

  test('test check if prime number (983) -> true', () => {
    expect(isPrimeNumberForLoop2(983)).toBe(true);
  })

  test('test check if prime number (5821) -> true', () => {
    expect(isPrimeNumberForLoop2(5821)).toBe(true);
  })

  test('test check if prime number (32831) -> true', () => {
    expect(isPrimeNumberForLoop2(32831)).toBe(true);
  })
});

describe('isPrimeNumber2' , () => {
  test('test check if prime number (2) -> true', () => {
    expect(isPrimeNumber2(2)).toBe(true);
  })

  test('test check if prime number (3) -> true', () => {
    expect(isPrimeNumber2(3)).toBe(true);
  })

  test('test check if prime number (20) -> false', () => {
    expect(isPrimeNumber2(20)).toBe(false);
  })

  test('test check if prime number (8001) -> false', () => {
    expect(isPrimeNumber2(8001)).toBe(false);
  })

  test('test check if prime number (293) -> true', () => {
    expect(isPrimeNumber2(293)).toBe(true);
  })

  test('test check if prime number (983) -> true', () => {
    expect(isPrimeNumber2(983)).toBe(true);
  })

  test('test check if prime number (5821) -> true', () => {
    expect(isPrimeNumber2(5821)).toBe(true);
  })

  test('test check if prime number (32831) -> true', () => {
    expect(isPrimeNumber2(32831)).toBe(true);
  })
});
