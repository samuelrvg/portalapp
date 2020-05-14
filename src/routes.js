import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

import Login from './pages/login';
import CustoVenda from './pages/custovenda';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#1f1f1d" />
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="custovenda"
          component={CustoVenda}
          options={{title: 'Custo de Venda'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
