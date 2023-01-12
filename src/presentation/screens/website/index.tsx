import {memo, useState} from 'react';
import {View, ViewProps} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Button from '../../components/button';
import Input from '../../components/input';
import {generateWebSite} from '../../../core/usecases/generate-website';

const Website: React.FC<ViewProps> = props => {
  const [website, setWebsite] = useState<string>(generateWebSite());

  return (
    <View {...props} style={{flex: 1, padding: 10, alignItems: 'center'}}>
      <Input icon="laptop" value={website} editable={false} />

      <Button
        icon="redo"
        title="Gerar novamente"
        outline={false}
        onPress={() => {
          setWebsite(generateWebSite());
        }}
      />

      <Button
        icon="clipboard"
        title="Copiar"
        outline={true}
        onPress={() => {
          Clipboard.setString(website);
        }}
      />
    </View>
  );
};

export default memo(Website);
