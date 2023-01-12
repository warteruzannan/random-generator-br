import {memo} from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../consts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    color: '#444',
    fontSize: 21,
    flex: 1,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

type InputProps = {
  icon?: string;
} & TextInputProps;

const Input: React.FC<InputProps> = props => {
  const {icon} = props;
  return (
    <View style={styles.container}>
      {icon && <Icon name={icon} size={30} color={colors.TRANSPARENT} />}
      <TextInput
        {...props}
        underlineColorAndroid={'#999'}
        textAlign="left"
        style={styles.textInput}
      />
    </View>
  );
};

export default memo(Input);
