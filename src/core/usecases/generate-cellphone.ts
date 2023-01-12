import {Chance} from 'chance';

export const generateCellphone = () => {
  return new Chance().phone({country: 'br', mobile: true});
};
