import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Footer from './Footer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Drawer = props => {
  return (
    <DrawerContentScrollView {...props} style={styles.drawer}>
      <View style={styles.img_container}>
        <Image
          style={{
            height: wp('20%'),
            width: wp('20%'),
            // backgroundColor: 'green',
            // paddingHorizontal: wp('10%'),
            // paddingVertical: wp('10%'),
          }}
          source={require('./images/minibus.png')}
        />
        <Text
          style={{
            color: '#000',
            // marginHorizontal: 15,
            marginHorizontal: wp('7%'),
            // marginVertical: 10,
            marginVertical: hp('1%'),
            fontWeight: '500',
            fontSize: 20,
            fontSize: hp('2.3%'),
          }}>
          TaxiFareCalculator
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: 'white',
    // height: 150,
    // paddingHorizontal: wp('2%'),
    height: hp('100%'),
    // width: wp('60%'),
    // marginBottom: 150,
  },
  img_container: {
    backgroundColor: '#fff',
    // flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // paddingHorizontal: 20,
    paddingHorizontal: wp('2%'),
    // paddingVertical: 30,
    paddingVertical: hp('3%'),
    // marginBottom: 20,
    marginBottom: hp('2%'),
    borderBottomColor: '#0003',
    borderBottomWidth: hp('0.2%'),
  },
});

export default Drawer;
