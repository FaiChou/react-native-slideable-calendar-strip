import React from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';
const width = Dimensions.get('window').width;
const WEEK = ['日', '一', '二', '三', '四', '五', '六'];
export default () => (
  <View style={{
    width,
    height: 30,
    flexDirection: 'row',
  }}>
    {WEEK.map(day =>
      <View style={{
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }} key={day}>
        <Text style={{
          color: 'gray',
          fontSize: 12,
        }}>{day}</Text>
      </View>
    )}
  </View>
);