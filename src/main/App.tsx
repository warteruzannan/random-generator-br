import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {colors} from '../presentation/consts';
import Dashboard from '../presentation/screens/dashboard';
import Password from '../presentation/screens/password';
import Cnpj from '../presentation/screens/cnpj';
import Cpf from '../presentation/screens/cpf';
import Email from '../presentation/screens/email';
import Invoice from '../presentation/screens/invoice';
import Website from '../presentation/screens/website';
import Cellphone from '../presentation/screens/cellphone';

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
          <Stack.Screen
            name="Cnpj"
            component={Cnpj}
            options={{title: 'Cnpj'}}
          />
          <Stack.Screen name="Cpf" component={Cpf} options={{title: 'Cpf'}} />
          <Stack.Screen
            name="Email"
            component={Email}
            options={{title: 'Email'}}
          />

          <Stack.Screen
            name="Invoice"
            component={Invoice}
            options={{title: 'Nota fiscal'}}
          />

          <Stack.Screen
            name="Website"
            component={Website}
            options={{title: 'Site'}}
          />

          <Stack.Screen
            name="Cellphone"
            component={Cellphone}
            options={{title: 'Celular'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
