import {Chance} from 'chance';
import {
  cnpjGenerator,
  createRamdomArray,
  verifyingDigitsGenerator,
} from './generate-cnpj';

function invoiceKeyGenerator() {
  const parcialInvoiceKey = [];
  const stateCode = [0, 5];
  const date = new Chance().date();
  const month =
    date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth().toString();
  const year = `${date.getFullYear()}`.slice(2, 4);
  const cnpj = cnpjGenerator();
  const invoiceCodesLength = 23;
  const maxNumber = 10;
  const invoiceCodes = createRamdomArray(invoiceCodesLength, maxNumber);
  parcialInvoiceKey.push(
    ...stateCode,
    ...year,
    ...month,
    ...cnpj,
    ...invoiceCodes,
  );

  const multipliers = [2, 3, 4, 5, 6, 7, 8, 9];
  const verifyingDigitsQuantity = 1;
  const generatedInvoiceKey = verifyingDigitsGenerator(
    verifyingDigitsQuantity,
    parcialInvoiceKey,
    multipliers,
  );

  return generatedInvoiceKey;
}

export const generateInvoice = () => {
  return invoiceKeyGenerator();
};
