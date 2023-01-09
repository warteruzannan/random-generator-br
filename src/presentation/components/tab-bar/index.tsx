import React, {memo} from 'react';
import {StyleSheet, Text, View, ViewProps} from 'react-native';
import {colors, dimensions, fonts} from '../../consts';

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomStartRadius: dimensions.BORDER_RADIOUS,
    borderBottomEndRadius: dimensions.BORDER_RADIOUS,
    shadowColor: colors.SHADOW,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: dimensions.BORDER_RADIOUS,
    elevation: dimensions.ELEVATION,
  },
  title: {
    color: colors.WHITE,
    fontSize: fonts.FONT_SIZE,
    fontWeight: fonts.FONT_WHEIGHT,
  },
});

type OwnProps = {
  title?: string;
};

type Props = OwnProps & ViewProps;
const TabBar: React.FC<Props> = props => {
  const {title} = props;
  return (
    <View style={[styles.container, props.style || {}]} {...props}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default memo(TabBar);
