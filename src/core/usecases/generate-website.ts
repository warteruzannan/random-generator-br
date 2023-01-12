import {Chance} from 'chance';

export const generateWebSite = () => {
  return new Chance().url();
};
