import React, { Component } from 'react';
import RoomList from './components/RoomList'
import './App.css';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCuSI6R8ERupjDqkRDMK5WWorWUrOT8_mk",
  authDomain: "react-chat-app-ea2a4.firebaseapp.com",
  databaseURL: "https://react-chat-app-ea2a4.firebaseio.com",
  projectId: "react-chat-app-ea2a4",
  storageBucket: "react-chat-app-ea2a4.appspot.com",
  messagingSenderId: "552523493004"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div>
        <RoomList firebase={firebase}/>
      </div>
    );
  }
}

export default App;
