import {memo, useState} from 'react';
import {View, ViewProps} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Button from '../../components/button';
import Input from '../../components/input';
import {generateCnpj} from '../../../core/usecases/generate-cnpj';

const Cnpj: React.FC<ViewProps> = props => {
  const [cnpj, setCnpj] = useState<string>(generateCnpj());

  return (
    <View {...props} style={{flex: 1, padding: 10, alignItems: 'center'}}>
      <Input icon="city" value={cnpj} editable={false} />

      <Button
        icon="redo"
        title="Gerar novamente"
        outline={false}
        onPress={() => {
          setCnpj(generateCnpj());
        }}
      />

      <Button
        icon="clipboard"
        title="Copiar"
        outline={true}
        onPress={() => {
          Clipboard.setString(cnpj);
        }}
      />
    </View>
  );
};

export default memo(Cnpj);
