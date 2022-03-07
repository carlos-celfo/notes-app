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

  onType = (editMeId, updatedKey, updatedValue) => {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id !== editMeId) {
        return note;
      } else {
        if (updatedKey === "title") {
          note.title = updatedValue;
          return note;
        } else {
          note.description = updatedValue;
          return note;
        }
      }
    });
    this.setState({ notes: updatedNotes });
  };

  onSearch = (text) => {
    const newSearchText = text.toLowerCase();
    const updatedNotes = this.state.notes.map((note) => {
      if (!newSearchText) {
        note.doesMatchSearch = true;
        return note;
      } else {
        const title = note.title.toLowerCase();
        const description = note.description.toLowerCase();
        const titleMatch = title.includes(newSearchText);
        const descriptionMatch = description.includes(newSearchText);
        const hasMatch = titleMatch || descriptionMatch;
        note.doesMatchSearch = hasMatch;
        return note;
      }
    });
    this.setState({
      notes: updatedNotes,
      searchText: newSearchText,
    });
  };

  removeNote = (noteBeingDeleted) => {
    const specificNoteId = noteBeingDeleted.id;
    // Rename to 'keepNotes' as this is what you are
    // ending up with - an array of all notes except
    // the deleted one

    // you want to use 'filter' here as you are interested in
    // returning a 'subset' of the array of notes
    const keepNotes = this.state.notes.filter((note) => {
      // You are comparing the id of the note that you are
      // iterating over with the id of the note that was passed
      // to this function (specificNoteId) and only returning
      // if there is not a match
      return note.id !== specificNoteId;
    });

    this.setState({
      notes: keepNotes,
    });
  };

  componentDidUpdate() {
    const stateString = JSON.stringify(this.state.notes);
    localStorage.setItem("stateString", stateString);
  }

  componentDidMount() {
    const stateString = localStorage.getItem("stateString");
    if (stateString) {
      const savedState = JSON.parse(stateString);
      this.setState({ notes: savedState });
    }
  }

  render() {
    return (
      <div>
        <Header
          onSearch={this.onSearch}
          addNote={this.addNote}
          searchText={this.state.searchText}
        />
        <NotesList
          onType={this.onType}
          notes={this.state.notes}
          removeNote={this.removeNote}
        />
      </div>
    );
  }
}

export default App;
