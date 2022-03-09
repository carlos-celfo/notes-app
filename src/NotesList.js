import React from "react";
import Note from "./Note.js";

const NotesList = (props) => {
  const keepSearchMatches = (note) => note.doesMatchSearch;
  const filteredSearch = props.notes.filter(keepSearchMatches);

  const renderNote = (note) => (
    <Note
      note={note}
      key={note.id}
      onType={props.onType}
      removeNote={props.removeNote}
    />
  );

  const noteElements = filteredSearch.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
