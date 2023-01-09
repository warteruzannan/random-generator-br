import React from 'react';
import {FlatList} from 'react-native';

import ItemCard from '../../../presentation/components/item-card';
import {itensData} from './itens.json';

const Dashboard: React.FC = () => {
  const renderItem = ({item}: any) => (
    <ItemCard title={item.title} icon={item.icon} />
  );

  return (
    <FlatList
      style={{flex: 1}}
      data={itensData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal={false}
      numColumns={2}
    />
  );
};

export default Dashboard;
