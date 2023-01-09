import {StyleSheet, Text, TouchableOpacity, ViewProps} from 'react-native';
import {colors, dimensions, fonts} from '../../consts';

import Icon from 'react-native-vector-icons/FontAwesome5';

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
  title: {
    marginTop: dimensions.MARGING,
    fontSize: fonts.FONT_SIZE,
    fontWeight: fonts.FONT_SEMI_BOLD,
  },
});

type OwnProps = {
  title: string;
  icon?: string;
};

type Props = OwnProps & ViewProps;
const ItemCard: React.FC<Props> = props => {
  const {title, icon} = props;
  return (
    <TouchableOpacity style={[styles.container, props.style || {}]} {...props}>
      <Icon name={icon || 'city'} size={60} color={colors.BLACK} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ItemCard;
