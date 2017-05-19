import React, { Component } from 'react';
import { View } from 'react-native';
//help call ajax to api to get data
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
    //console.log('componentWillMount in AlbumList');
    //  debugger
  }

  renderAlbums() {
    return this.state.albums.map(album =>
        <AlbumDetail key={album.title} album={album} />);// map is array helper
  }

  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

//make the component available to other parts of the app
export default AlbumList;
