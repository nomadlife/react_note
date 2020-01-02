import './App.css';
import React, { Component } from 'react'

const firebase = require('firebase');


class App extends Component {
  constructor(){
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    };
  }
  
  render() {
    return (
      <div>
        Hello!!
      </div>
    )
  }

  componentDidMount = () => {
    // grab firebse notes
    firebase
    .firestore()
    .collection('notes')
    .onSnapshot(serverUpdate => {
      const notes = serverUpdate.docs.map(_doc => {
        const data = _doc.data();
        data['id'] = _doc.id;
        return data;
      });
      console.log(notes);
      
      this.setState({ notes:notes });
    });

  }
}

export default App
