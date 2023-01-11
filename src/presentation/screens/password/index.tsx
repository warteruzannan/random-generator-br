import {memo, useState} from 'react';
import {View, ViewProps} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Button from '../../components/button';
import {generatePassword} from '../../../core/usecases/generate-password';
import Input from '../../components/input';

const Password: React.FC<ViewProps> = props => {
  const [password, setPassword] = useState<string>(generatePassword());

  return (
    <View {...props} style={{flex: 1, padding: 10, alignItems: 'center'}}>
      <Input icon="lock" value={password} editable={false} />

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
