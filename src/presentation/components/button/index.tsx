import React, {memo} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {colors, dimensions, fonts} from '../../consts';

type OwnProps = {
  outline?: boolean;
  title: string;
  icon?: string;
};

export type ButtonProps = OwnProps & TouchableOpacityProps;

const styles = StyleSheet.create({
  button: {
    borderColor: colors.PRIMARY,
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    padding: dimensions.PADDING,
    marginTop: dimensions.MARGING * 2,
    borderRadius: dimensions.BORDER_RADIOUS,
    shadowColor: colors.SHADOW,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: dimensions.BORDER_RADIOUS,
    elevation: dimensions.ELEVATION,
    flexDirection: 'row',
  },
  text: {
    fontSize: fonts.FONT_SIZE,
    fontWeight: fonts.FONT_SEMI_BOLD,
    marginLeft: dimensions.MARGING,
  },
});

const Button: React.FC<ButtonProps> = props => {
  const {outline, title, icon} = props;
  const backgroundColor = outline ? colors.WHITE : colors.PRIMARY;

  return (
    <TouchableOpacity {...props} style={[{backgroundColor}, styles.button]}>
      {icon && (
        <Icon
          size={20}
          color={outline ? colors.PRIMARY : colors.WHITE}
          name={icon}
        />
      )}
      <Text
        style={[{color: outline ? colors.PRIMARY : colors.WHITE}, styles.text]}>
        {title}
      </Text>
      {props.children}
    </TouchableOpacity>
  );
};

export default memo(Button);
