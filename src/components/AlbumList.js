import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  componentWillMount() {
    console.log('componentWillMount in AlbumList');
    debugger
  }

  render() {
    return (
      <View>
        <Text>AlbumList</Text>
      </View>
    );
  }
}

//make the component available to other parts of the app
export default AlbumList;
