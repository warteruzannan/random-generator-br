import {Chance} from 'chance';

export const generateEmail = () => {
  return new Chance().email();
};
