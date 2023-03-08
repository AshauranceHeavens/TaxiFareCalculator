import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Row = ({answer, seen}) => {
  const [color, setColor] = useState('lightgreen');

  var orange = 'orange',
    red = 'red',
    lightgreen = 'lightgreen',
    green = 'green';

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        {
          backgroundColor: `${
            answer.seen
              ? green
              : answer.number > 0
              ? orange
              : answer.number < 0
              ? red
              : lightgreen
          }`,
        },
        styles.touchable,
      ]}
      key={answer.id}
      onPress={() => seen(answer.id)}>
      <Text style={styles.text}>
        {answer.number == 0
          ? `(${parseFloat(answer.price).toFixed(2)}) ${answer.people} in R${
              answer.amount
            } No change = R` + answer.number
          : answer.number > 0
          ? `(${parseFloat(answer.price).toFixed(2)}) ${
              answer.people
            } in R${parseFloat(answer.amount).toFixed(2)} Change = R` +
            answer.number
          : answer.number < 0
          ? `(${parseFloat(answer.price).toFixed(2)}) ${
              answer.people
            } in R${parseFloat(answer.amount).toFixed(2)} Short = R` +
            answer.number * -1
          : ''}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    // marginLeft: 20,
    // marginRight: 20,
    marginHorizontal: wp('9%'),
    marginBottom: hp('1%'),
    paddingVertical: hp('1.3%'),
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 19,
    fontSize: hp('2.2%'),
    color: 'black',
  },
});

export default Row;
