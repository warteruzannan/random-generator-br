import {Chance} from 'chance';

export const generateUser = () => {
  return new Chance().twitter();
};
