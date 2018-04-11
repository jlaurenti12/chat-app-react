import React, { Component } from 'react';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
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
  constructor(props) {
    super(props);
    this.state = {activeRoom: ""};
    this.activeRoom = this.activeRoom.bind(this);
  }

  activeRoom(room) {
    this.setState({ activeRoom: room })
  }

  render() {
    const showMessages = this.state.activeRoom;

    return (
      <div>
        <h1>{this.state.activeRoom.title || "Select A Room" }</h1>
        <RoomList firebase={firebase} activeRoom={this.activeRoom} />
        { showMessages ?
        (<MessageList firebase={firebase} activeRoom={this.state.activeRoom.key}/>)
        :null
        }
      </div>
    );
  }
}

export default App;
