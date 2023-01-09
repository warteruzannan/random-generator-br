import {StyleSheet, Text, TouchableOpacity, ViewProps} from 'react-native';
import {colors, dimensions} from '../../consts';

import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 150,
    borderColor: colors.EXTRA_GRAY,
    borderWidth: 1, //StyleSheet.hairlineWidth,
    margin: dimensions.MARGING,
    borderRadius: dimensions.BORDER_RADIOUS,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: dimensions.ELEVATION,
    shadowColor: colors.SHADOW,
    shadowOffset: {width: 2, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: dimensions.BORDER_RADIOUS,
  },
});

type OwnProps = {
  title: string;
};

type Props = OwnProps & ViewProps;
const ItemCard: React.FC<Props> = props => {
  const {title} = props;
  return (
    <TouchableOpacity style={[styles.container, props.style || {}]} {...props}>
      <Icon name="rocket" size={60} color="#900" />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default ItemCard;
