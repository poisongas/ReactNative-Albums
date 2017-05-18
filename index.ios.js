//index.ios.js - place code in here for IOS

//import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';

//create a component
const App = () => (
  <Header />
);

//render it to the device
AppRegistry.registerComponent('albums', () => App);