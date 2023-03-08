import React from 'react';
import {View, Text, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://Ashauranceheavens.github.io')
          }>
          <Text
            style={[
              styles.text,
              {
                textDecorationLine: 'underline',
                textDecorationColor: '#fff',
              },
            ]}>
            Sqiniseko Zulu
          </Text>
        </TouchableOpacity>
        <Text style={styles.text}>Copyright &copy; 2023 v 2.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1f1f1f',
    // padding: 20,
    paddingVertical: hp('3.2%'),
    paddingHorizontal: wp('10%'),
    display: 'flex',
    justifyContent: 'center',
    // marginTop: 47,
    marginTop: hp('3.5%'),
    marginBottom: hp('7%'),
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 2,
    fontSize: hp('1.8%'),
  },
});

export default Footer;
