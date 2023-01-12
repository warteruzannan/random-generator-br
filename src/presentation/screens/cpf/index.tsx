import {memo, useState} from 'react';
import {View, ViewProps} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Button from '../../components/button';
import Input from '../../components/input';
import {generateCpf} from '../../../core/usecases/generate-cpf';

const Cpf: React.FC<ViewProps> = props => {
  const [cpf, setCpf] = useState<string>(generateCpf());

  return (
    <View {...props} style={{flex: 1, padding: 10, alignItems: 'center'}}>
      <Input icon="lock" value={cpf} editable={false} />

      <Button
        icon="redo"
        title="Gerar novamente"
        outline={false}
        onPress={() => {
          setCpf(generateCpf());
        }}
      />

      <Button
        icon="clipboard"
        title="Copiar"
        outline={true}
        onPress={() => {
          Clipboard.setString(cpf);
        }}
      />
    </View>
  );
};

export default memo(Cpf);
