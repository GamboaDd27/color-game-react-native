import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo';
import Title from "./components/title/title";
import styles from "./style"
export default class App extends React.Component {
  render() {
    return (
     <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#434343', flex: 1 }} />
        <LinearGradient
          colors={['#000000', '#434343']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 300,
            justifyContent:'center'
          }} >
           <Title/>
        </LinearGradient>
       
      </View>

    );
  }
}
