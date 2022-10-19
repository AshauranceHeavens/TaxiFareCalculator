import React from 'react';
import { View, Text, Button } from 'react-native';
import About from './About.js';
import Home from './Home';
import Header from '../components/Header.js';
import Drawer from '../components/Drawer';

const ScreenContainer = ({ children }) => (
    <View>{children}</View>
);

export const Aboutscreen = ({ navigation }) => {
    return(
        <ScreenContainer >
         <About navigation={navigation} />
        </ScreenContainer>
    );
}

export const Homescreen = ({ navigation }) => {
    return(
        <ScreenContainer>
         <Home navigation={navigation} />
        </ScreenContainer>
    );
};

export const Headerscreen = ({ navigation }) => {
    return(
        <ScreenContainer>
         <Header navigation={navigation} />
        </ScreenContainer>
    );
};

// export const CustomDrawer = ({ navigation }) => {
//     return(
//         <ScreenContainer>
//          <Drawer />
//         </ScreenContainer>
//     );
// };



