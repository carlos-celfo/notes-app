import React from "react";

const Note = (props) => {
  const updateTitle = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "title", updatedValue);
  };

  const updateDescription = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "description", updatedValue);
  };

  const noteDeletion = () => {
    props.removeNote(noteBeingDeleted);
  };
  //props.note.id//
  return (
    <li className="note">
      <input
        value={props.note.title}
        type="text"
        placeholder="Title"
        className="note__title"
        onChange={updateTitle}
      />
      <textarea
        value={props.note.description}
        placeholder="Description..."
        className="note__description"
        onChange={updateDescription}
      />
      <span className="note__delete" onClick={noteDeletion}>
        X
      </span>
    </li>
  );
};

export default Note;
