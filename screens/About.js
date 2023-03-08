import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
// import { ScreenContainer } from './screens';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const About = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView
        style={{
          backgroundColor: 'white',
          height: hp('100%'),
          paddingTop: hp('1.2%'),
          // paddingBottom: hp('1.2%'),
        }}
        keyboardShouldPersistTaps="handled">
        <Text style={styles.text}>
          (15) Fare amount - the required amount to travel from point A to point
          B
        </Text>
        <Text style={styles.text}>
          1 Number of people - the number of people in a certain amount
        </Text>
        <Text style={styles.text}>
          R20 Given amount - this is the given or paid amount
        </Text>
        <Text style={styles.text}>
          Use the money keyboard to enter the price and given amount values. E.g
          to enter R15, click +R10 and then +R5, the input field will accept
          that as 15
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={styles.image_wrapper}>
            <Image
              source={require('../components/images/new_taxi_1.png')}
              style={styles.image}
            />
          </View>
        </View>
        <Text style={styles.text}>
          Use the number keyboard to enter the number of people
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={styles.image_wrapper}>
            <Image
              source={require('../components/images/new_taxi_2.png')}
              style={styles.image}
            />
          </View>
        </View>
        <Text style={styles.text}>
          Press the Equals button to get an answer and repeat the process for
          all calculations
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={styles.image_wrapper}>
            <Image
              source={require('../components/images/new_taxi_3.png')}
              style={styles.image}
            />
          </View>
        </View>
        <Text style={styles.text}>
          Click answers you have seen to turn them to green
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={styles.image_wrapper}>
            <Image
              source={require('../components/images/taxi_3.png')}
              style={styles.image}
            />
          </View>
        </View>
        <Text style={[styles.text, {marginBottom: hp('10%')}]}>
          Press the Reset button to start a new set of calculations
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: hp('55%'),
    width: wp('50%'),
  },
  image_wrapper: {
    // marginVertical: 20,
    marginVertical: hp('2%'),
    borderColor: 'black',
    // borderWidth: 1,
    // shadowColor: 'black',
    // shadowOpacity: 0.9,
    // shadowRadius: 5,
    // shadowOffset: {width: 0, height: 10},
    elevation: 15,
  },
  text: {
    // textAlign: 'left',
    textAlign: 'justify',
    paddingTop: 0,
    // paddingHorizontal: 40,
    paddingHorizontal: wp('10%'),
    // fontSize: 18,
    fontSize: hp('2.2%'),
    // color: '#0009',
    color: 'black',
  },
});

export default About;
