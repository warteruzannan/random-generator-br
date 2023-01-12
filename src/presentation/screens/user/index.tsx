import {memo, useState} from 'react';
import {View, ViewProps} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Button from '../../components/button';
import Input from '../../components/input';
import {generateUser} from '../../../core/usecases/generate-user';

const User: React.FC<ViewProps> = props => {
  const [user, setUser] = useState<string>(generateUser());

  return (
    <View {...props} style={{flex: 1, padding: 10, alignItems: 'center'}}>
      <Input icon="lock" value={user} editable={false} />

      <Button
        icon="redo"
        title="Gerar novamente"
        outline={false}
        onPress={() => {
          setUser(generateUser());
        }}
      />

      <Button
        icon="clipboard"
        title="Copiar"
        outline={true}
        onPress={() => {
          Clipboard.setString(user);
        }}
      />
    </View>
  );
};

export default memo(User);
