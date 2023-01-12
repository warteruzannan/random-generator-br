import {memo, useState} from 'react';
import {View, ViewProps} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Button from '../../components/button';
import Input from '../../components/input';
import {generateInvoice} from '../../../core/usecases/generate-invoice';

const Invoice: React.FC<ViewProps> = props => {
  const [invoice, setInvoice] = useState<string>(generateInvoice());

  return (
    <View {...props} style={{flex: 1, padding: 10, alignItems: 'center'}}>
      <Input
        icon="lock"
        value={invoice}
        editable={false}
        numberOfLines={2}
        multiline={true}
      />

      <Button
        icon="redo"
        title="Gerar novamente"
        outline={false}
        onPress={() => {
          setInvoice(generateInvoice());
        }}
      />

      <Button
        icon="clipboard"
        title="Copiar"
        outline={true}
        onPress={() => {
          Clipboard.setString(invoice);
        }}
      />
    </View>
  );
};

export default memo(Invoice);
