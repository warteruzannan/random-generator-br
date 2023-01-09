import React, {memo} from 'react';
import {StyleSheet, Text, View, ViewProps} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: '#5a6bcc',
    justifyContent: 'center',
    alignItems: 'center',
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
      <Text>{title}</Text>
    </View>
  );
};

export default memo(TabBar);
