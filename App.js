import "react-native-gesture-handler";
import 'react-native-splash-screen';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Button } from 'react-native';

import  SplashScreen from 'react-native-splash-screen';

import { Home } from './screens/Home';
import { Aboutscreen } from './screens/screens.js';
import { Homescreen } from './screens/screens';
import { Header } from './components/Header.js';
import { Headerscreen } from './screens/screens.js';
import CustomDrawer from './screens/screens';
import Drawer from './components/Drawer';


const DrawerStack = createDrawerNavigator();

 const App = () => {
    return(
        <NavigationContainer onReady={() => SplashScreen.hide()}>
            <DrawerStack.Navigator screenOptions={{headerStyle: {backgroundColor: 'brown'}, headerTintColor: 'white'}} drawerContent={(props)=><Drawer {...props} /> }  >
                <DrawerStack.Screen name="Home" component={Homescreen} options={{headerTitle: () => (<Headerscreen />) }}/>
                <DrawerStack.Screen name="Help" component={Aboutscreen} /> 
            </DrawerStack.Navigator>
        </NavigationContainer>
    )
}

export default App;
