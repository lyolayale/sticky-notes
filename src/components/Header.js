import React from "react";

function Header(props) {
  return (
    <header className="app-header__title">
      <h1>Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button onClick={props.onClick} className="add-new">
          + New Note
        </button>
        <input
          onChange={props.onSearch}
          className="search"
          type="text"
          placeholder="Search your notes ..."
          id={props.id}
        />
      </aside>
    </header>
  );
}

export default Header;
