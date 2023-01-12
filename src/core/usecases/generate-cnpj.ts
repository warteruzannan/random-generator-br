function calculateDividend(digits: Array<number>, multipliers: Array<number>) {
  let sumDigits = 0;
  let i = digits.length - 1;

  while (i >= 0) {
    for (let j = 0; j < multipliers.length && i >= 0; j++) {
      sumDigits += digits[i] * multipliers[j];
      i -= 1;
    }
  }
  return sumDigits;
}

function calculateVerifyingDigit(dividend: number) {
  const verifyingDigitDefaultDivisor = 11;
  const mod = dividend % verifyingDigitDefaultDivisor;

  return mod < 2 ? 0 : verifyingDigitDefaultDivisor - mod;
}

function verifyingDigitsGenerator(
  digitsQuantity: any,
  array: Array<number>,
  multipliers: Array<number>,
  lastMultiplier: number,
) {
  for (let i = 1; i <= digitsQuantity; i++) {
    const dividend = calculateDividend(array, multipliers);
    const verifyingDigit = calculateVerifyingDigit(dividend);
    array.push(verifyingDigit);

    if (lastMultiplier && i == 1) {
      multipliers.push(lastMultiplier);
    }
  }
  return array.join('');
}

function createRamdomArray(length: number, maxNumber: number) {
  const array = [];
  while (array.length < length) {
    array.push(Math.floor(Math.random() * maxNumber));
  }
  return array;
}

function cnpjGenerator() {
  const cnpjLength = 8;
  const maxNumber = 9;
  const multipliers = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
  const lastMultiplier = 6;
  const verifyingDigitsQuantity = 2;

  const parcialCNPJ = createRamdomArray(cnpjLength, maxNumber);
  const fixedDigits = [0, 0, 0, 1];
  parcialCNPJ.push(...fixedDigits);

  const generatedCNPJ = verifyingDigitsGenerator(
    verifyingDigitsQuantity,
    parcialCNPJ,
    multipliers,
    lastMultiplier,
  );

  return generatedCNPJ;
}

export const generateCnpj = () => {
  let cnpjMask = '##.###.###/####-##';
  const cnpj = cnpjGenerator().split('');
  const caracter: any = {
    2: '.',
    6: '.',
    10: '/',
    15: '-',
  };

  return cnpjMask
    .split('')
    .map((char, index) => {
      return caracter[index] ? caracter[index] : cnpj.shift();
    })
    .join('');
};
