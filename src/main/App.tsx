import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import TabBar from '../presentation/components/tab-bar';
import {colors} from '../presentation/consts';
import Dashboard from '../presentation/screens/dashboard';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.PRIMARY} />
      <TabBar title="Gerador BR" />
      <Dashboard />
    </SafeAreaView>
  );
};

export default App;
