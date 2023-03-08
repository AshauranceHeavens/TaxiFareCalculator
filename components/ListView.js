import React, {useState} from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import Row from './Row';

const ListView = ({answers, seen}) => {
  return (
    <ScrollView>
      <FlatList
        data={answers}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Row answer={item} seen={seen} />}
      />
      {/* {answers.map((answer) => <Row answer={answer} seen={seen} /> )} */}
    </ScrollView>
  );
};

export default ListView;
