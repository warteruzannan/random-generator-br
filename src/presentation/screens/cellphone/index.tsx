import {memo, useState} from 'react';
import {View, ViewProps} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Button from '../../components/button';
import Input from '../../components/input';
import {generateCellphone} from '../../../core/usecases/generate-cellphone';

const Cellphone: React.FC<ViewProps> = props => {
  const [cellphone, setCellphone] = useState<string>(generateCellphone());

  return (
    <View {...props} style={{flex: 1, padding: 10, alignItems: 'center'}}>
      <Input icon="mobile-alt" value={cellphone} editable={false} />

      <Button
        icon="redo"
        title="Gerar novamente"
        outline={false}
        onPress={() => {
          setCellphone(generateCellphone());
        }}
      />

      <Button
        icon="clipboard"
        title="Copiar"
        outline={true}
        onPress={() => {
          Clipboard.setString(cellphone);
        }}
      />
    </View>
  );
};

export default memo(Cellphone);
