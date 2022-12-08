import React from "react";

function Note(props) {
  const handleTitle = (e) => {
    const newTitle = e.target.value;
    const id = props.id;
    props.onType(id, "title", newTitle);
  };

  const handleDescription = (e) => {
    const newDescription = e.target.value;
    const id = props.id;
    props.onType(id, "description", newDescription);
  };
  return (
    <li className="note">
      <input
        onChange={handleTitle}
        className="note__title"
        type="text"
        value={props.title}
      />
      <textarea
        onChange={handleDescription}
        className="note__description"
        value={props.description}
      />
      <span onClick={props.onClick} id={props.id} className="note__delete">
        X
      </span>
    </li>
  );
}

export default Note;
