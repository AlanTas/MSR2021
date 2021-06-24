
import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

export default function Campaign({ data }) {
  return( 
    <View> 
      <Text>{data.name}</Text> 
      <Text>{data.id}</Text> 
    </View> 
  ); 
} 

const styles = StyleSheet.create({ 
  name: { fontSize: 50, color: 'black' }, 
  id: { fontSize: 10, color: 'grey' },
});


