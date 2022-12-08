import React from "react";

// *** Internal file imports
import Note from "./Note";

function NoteList(props) {
  return (
    <ul className="notes-list">
      {props.notes
        .filter((note) => note.doesMatchSearch)
        .map((note) => (
          <Note
            onClick={props.onClick}
            key={note.id}
            notes={note}
            title={note.title}
            description={note.description}
            id={note.id}
            onType={props.onType}
          />
        ))}
    </ul>
  );
}

export default NoteList;
