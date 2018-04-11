import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
      this.state = { name: "", rooms: [] };

    this.handleChange = this.handleChange.bind(this);
    this.createRoom = this.createRoom.bind(this);
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  createRoom(e) {
    e.preventDefault();
    this.roomsRef.push({ name: this.state.name });
    this.setState({ name: "" });
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })
    });
  }


  render() {
    const roomForm = (
      <form onSubmit={this.createRoom}>
        <input type="text" value={this.state.name} placeholder="Enter Room Name" onChange={this.handleChange}/>
        <input type="submit" value="Create" />
      </form>
    );

    const roomList = this.state.rooms.map((room) =>
      <li key={room.key}>{room.name}</li>
    );

    return(
      <div>
        <div>{roomForm}</div>
        <ul>{roomList}</ul>
      </div>
    );
  }
}

export default RoomList;
