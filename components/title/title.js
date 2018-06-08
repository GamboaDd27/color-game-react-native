import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet } from 'react-native';
export default class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "The Great RGB Color Game",
  };
}
render() {
    return (
        <Text style={styles.titleText}>
          {this.state.titleText.toUpperCase()}{'\n'}{'\n'}
        </Text>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d3d3d3',
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center'
  },
});
