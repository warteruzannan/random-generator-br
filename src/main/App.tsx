import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {colors} from '../presentation/consts';
import Dashboard from '../presentation/screens/dashboard';
import Password from '../presentation/screens/password';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.DARKER : colors.LIGHTER,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.PRIMARY} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.PRIMARY,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            presentation: 'modal',
          }}>
          <Stack.Screen
            name="Home"
            component={Dashboard}
            options={{title: 'Gerador BR'}}
          />
          <Stack.Screen
            name="Password"
            component={Password}
            options={{title: 'Senhas'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
