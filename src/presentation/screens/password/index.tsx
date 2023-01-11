import {memo, useEffect, useState} from 'react';
import {TextInput, View, ViewProps} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../consts';
import Clipboard from '@react-native-clipboard/clipboard';
import Button from '../../components/button';
import {generatePassword} from '../../../core/usecases/generate-password';

const Password: React.FC<ViewProps> = props => {
  const [password, setPassword] = useState<string>('035.976.121-64');

  useEffect(() => {
    setPassword(generatePassword());
  }, []);

  return (
    <View {...props} style={{flex: 1, padding: 10, alignItems: 'center'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name={'lock'} size={30} color={colors.TRANSPARENT} />
        <TextInput
          underlineColorAndroid={'#999'}
          textAlign="left"
          value={password}
          editable={false}
          style={{
            color: '#444',
            fontSize: 21,
            flex: 1,
            fontWeight: 'bold',
            marginLeft: 10,
          }}
        />
      </View>

      <Button
        icon="redo"
        title="Gerar novamente"
        outline={false}
        onPress={() => {
          setPassword(generatePassword());
        }}
      />

      <Button
        icon="clipboard"
        title="Copiar"
        outline={true}
        onPress={() => {
          Clipboard.setString(password);
        }}
      />
    </View>
  );
};

export default memo(Password);
