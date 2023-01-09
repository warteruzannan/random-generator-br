import React from 'react';
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

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
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e59d72',
      title: 'Third Item',
    },
  ];

  const renderItem = ({item}: any) => <ItemCard title={item.title} />;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.PRIMARY} />
      <TabBar title="Gerador BR" />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <ItemCard></ItemCard>
      </ScrollView> */}

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
