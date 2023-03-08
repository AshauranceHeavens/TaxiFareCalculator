import 'react-native-gesture-handler';
import 'react-native-splash-screen';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, Button} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import {Home} from './screens/Home';
import {Aboutscreen} from './screens/screens.js';
import {Homescreen} from './screens/screens';
import {Header} from './components/Header.js';
import {Headerscreen} from './screens/screens.js';
import {Keyboardscreen} from './screens/screens.js';
import {CustomKeyboardscreen} from './screens/screens.js';
import CustomDrawer from './screens/screens';
import Drawer from './components/Drawer';
import {store} from './Redux/store';
import {Provider} from 'react-redux';

const DrawerStack = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer onReady={() => SplashScreen.hide()}>
        <DrawerStack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'brown',
            },
            headerTintColor: 'white',
          }}
          drawerContent={props => <Drawer {...props} />}>
          <DrawerStack.Screen
            name="Home"
            component={Homescreen}
            options={{
              headerRight: () => <Headerscreen title="TaxiFareCalculator" />,
            }}
          />
          <DrawerStack.Screen
            name="Help"
            component={Aboutscreen}
            options={{
              headerRight: () => <Headerscreen title="Help" />,
            }}
          />
        </DrawerStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
