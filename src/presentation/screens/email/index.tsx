import {memo, useState} from 'react';
import {View, ViewProps} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Button from '../../components/button';
import Input from '../../components/input';
import {generateEmail} from '../../../core/usecases/generate-email';

const Email: React.FC<ViewProps> = props => {
  const [email, setEmail] = useState<string>(generateEmail());

  return (
    <View {...props} style={{flex: 1, padding: 10, alignItems: 'center'}}>
      <Input icon="at" value={email} editable={false} />

      <Button
        icon="redo"
        title="Gerar novamente"
        outline={false}
        onPress={() => {
          setEmail(generateEmail());
        }}
      />

      <Button
        icon="clipboard"
        title="Copiar"
        outline={true}
        onPress={() => {
          Clipboard.setString(email);
        }}
      />
    </View>
  );
};

export default memo(Email);
