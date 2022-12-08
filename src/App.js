import React from "react";

// *** Internal file imports
import Header from "./components/Header";
import NoteList from "./components/NotesList";

class App extends React.Component {
  state = {
    notes: [
      {
        id: 0,
        title: "eat",
        description: "reese peanut butter cups",
        doesMatchSearch: true
      },
      {
        id: 1,
        title: "sleep",
        description: "eight hours",
        doesMatchSearch: true
      },
      {
        id: 2,
        title: "code",
        description: "build an awesome ui",
        doesMatchSearch: true
      }
    ],
    searchText: ""
  };

  addNote = () =>
    this.setState({
      notes: this.state.notes.concat({
        id: Date.now(),
        title: "",
        descipttion: "",
        doesMatchSearch: true
      })
    });

  deleteNote = (e) => {
    const newNotes = this.state.notes.filter(
      (item) => item.id !== Number(e.target.id)
    );
    this.setState({ notes: newNotes });
  };

  onType = (id, key, value) => {
    const newNotes = this.state.notes.map((item) => {
      if (item.id !== id) return item;
      key === "title" ? (item.title = value) : (item.description = value);
      return item;
    });
    this.setState({ notes: newNotes });
  };

  onSearch = (e) => {
    let newNotes = this.state.notes;
    newNotes = newNotes.filter((item) => {
      if (
        item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.description.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        item.doesMatchSearch = true;
        return item;
      } else {
        item.doesMatchSearch = false;
        return item;
      }
    });
    this.setState({ notes: newNotes });
  };

  componentDidUpdate = () => {
    const notesStateString = JSON.stringify(this.state.notes);
    localStorage.setItem("notesStateString", notesStateString);
  };

  componentDidMount = () => {
    const notesStateString = localStorage.getItem("notesStateString");
    if (notesStateString) {
      const getSavedState = JSON.parse(notesStateString);
      this.setState({ notes: getSavedState });
    }
  };

  render() {
    return (
      <div>
        <Header
          onSearch={this.onSearch}
          onClick={this.addNote}
          searchText={this.state.searchText}
          value={this.state.searchText}
        />
        <NoteList
          onClick={this.deleteNote}
          notes={this.state.notes}
          id={this.state.notes.id}
          onType={this.onType}
        />
      </div>
    );
  }
}

export default App;
