import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const dimensions = {
  ELEVATION: 2,
  BORDER_RADIOUS: 10,
  PADDING: 10,
  MARGING: 10,
  width: (percent: number) => width * percent,
  height: (percent: number) => height * percent,
};
