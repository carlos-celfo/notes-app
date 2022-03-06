import React from "react";

const Header = (props) => {
  const callSearch = (e) => {
    props.onSearch(e.target.value);
  };

  return (
    <header className="app-header">
      <h1 className="app-header__title">Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button onClick={props.addNote} className="add-new">
          {" "}
          + New Note{" "}
        </button>
        <input
          value={props.searchText}
          className="search"
          type="text"
          placeholder="Type here to search..."
          onChange={callSearch}
        />
      </aside>
    </header>
  );
};

export default Header;
