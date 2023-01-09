import React, {memo} from 'react';
import {StyleSheet, Text, View, ViewProps} from 'react-native';
import {colors} from '../../consts';

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 20,
  },
  title: {
    color: colors.WHITE,
    fontWeight: '600',
    fontSize: 18,
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
