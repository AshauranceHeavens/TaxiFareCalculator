import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const Header = ({navigation, title}) => {
  const navigator = useNavigation();
  return (
    <View style={styles.safearea}>
      <View style={styles.main}>
        <MaterialIcons
          name="menu"
          size={29}
          color="#fff"
          onPress={() => navigator.toggleDrawer()}
        />
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: 'brown',
    width: wp('100%'),
    paddingLeft: wp('9%'),
    paddingVertical: hp('1%'),
  },
  main: {
    // marginLeft: wp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    // fontSize: 20,
    fontSize: hp('2.3%'),
    fontWeight: 'bold',
    marginLeft: wp('4%'),
  },
});

export default Header;
