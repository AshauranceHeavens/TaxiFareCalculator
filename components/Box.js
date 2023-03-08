import React from 'react';
import {Row} from 'react-bootstrap';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Box = ({title, bgcolor}) => {
  return (
    <View style={styles.main}>
      <View style={styles.main_view}>
        <View style={[{backgroundColor: bgcolor}, styles.box]}></View>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // paddingTop: 10,
    // paddingBottom: 10,
    paddingVertical: hp('1%'),
    // paddingLeft: 20,
    // paddingRight: 20,
    paddingHorizontal: wp('9%'),
    width: wp('100%'),
    backgroundColor: 'white',
  },
  main_view: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  box: {
    // height: 30,
    height: hp('3.4%'),
    // width: 30,
    // width: wp('7.4%'),
    width: hp('3.4%'),
    marginRight: wp('4%'),
    borderRadius: wp('1.2%'),
  },
  text: {
    fontSize: hp('2.5%'),
    color: '#0009',
    textAlign: 'left',
  },
});

export default Box;
