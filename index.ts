// 指數 function
export const customPower = (base: number, upper: number) => {
  let result = 1;
  for (let i = 0; i < upper; i++) {
    result *= base;
  }
  return result;
}

export const customPower2 = (base: number, upper: number): number => {
  if (upper === 0) return 1;
  if (upper === 1) return base;

  if (upper % 2 === 0) {
    const halfUpper = upper / 2
    return customPower2(base, halfUpper) * customPower2(base, halfUpper);
  }
  const halfUpper = (upper - 1) / 2
  return base * customPower2(base, halfUpper) * customPower2(base, halfUpper)
}

// prime number
export const isPrimeNumber = (input: number): boolean => {
  if (input === 2) return true;
  if (input === 3) return true;

  if (input % 2 === 0) return false;
  if (input % 3 === 0) return false;

  for (let i = 5; i * i < input; i += 6) {
    if (input % i === 0) return false;
    if (input % (i + 2) === 0) return false;
  }
  return true;
}

export const isPrimeNumberForLoop2 = (input: number): boolean => {
  for (let checkNumber = input - 1; checkNumber > 1; checkNumber--) {
    if (input % checkNumber === 0) return false;
  }
  return true;
}

export const isPrimeNumber2 = (input: number): boolean => {
  const isHasDivisor = (checkNumber: number, currentInput: number): boolean => {
    if (checkNumber === 1) return false;
    return currentInput % checkNumber === 0 || isHasDivisor(--checkNumber, currentInput)
  }
  return !isHasDivisor(input - 1, input)
}
