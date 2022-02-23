import React, { Component } from "react";
import Header from "./Header.js";
import NotesList from "./NotesList.js";

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true,
      },
    ],
    searchText: "",
  };

  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true,
    };

    this.setState({ notes: [newNote, ...this.state.notes] });
  };

  render() {
    return (
      <div>
        <Header />
        <NotesList />
      </div>
    );
  }
}

export default App;
