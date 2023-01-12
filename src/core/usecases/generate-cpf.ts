import Chance from 'chance';

export const generateCpf = () => {
  return new Chance().cpf();
};
