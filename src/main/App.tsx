import React from 'react';
import {FlatList, SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ItemCard from '../presentation/components/item-card';
import TabBar from '../presentation/components/tab-bar';
import {colors} from '../presentation/consts';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const data = [
    {
      id: '1',
      title: 'CPF',
      icon: 'user-alt',
    },
    {
      id: '2',
      title: 'CNPJ',
      icon: 'city',
    },
    {
      id: '3',
      title: 'E-Mail',
      icon: 'at',
    },
    {
      id: '4',
      title: 'Nota Fiscal',
      icon: 'barcode',
    },
    {
      id: '5',
      title: 'Web site',
      icon: 'laptop',
    },
    {
      id: '6',
      title: 'Senhas',
      icon: 'lock',
    },
    {
      id: '7',
      title: 'Celular',
      icon: 'mobile-alt',
    },
    {
      id: '8',
      title: 'Usuário',
      icon: 'user-check',
    },
  ];

  const renderItem = ({item}: any) => (
    <ItemCard title={item.title} icon={item.icon} />
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.PRIMARY} />
      <TabBar title="Gerador BR" />
      <FlatList
        style={{flex: 1}}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default App;
