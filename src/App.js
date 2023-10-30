import "./App.css";
import { useState } from "react";
import NoteForm from "./component/NoteForm";
import NoteList from "./component/NoteList";
import Dropdown from "./component/Dropdown";

function App() {
  const [noteTitle, setNotetitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(null);
  const [selects, setSelects] = useState('');
  const [check, setCheck] = useState(false);
  


  return (
    <div className="container">
      <Dropdown
        selects={selects}
        setSelects={setSelects}
      />

      <NoteForm
        edit={edit}
        notes={notes}
        update={update}
        setEdit={setEdit}
        setNotes={setNotes}
        noteTitle={noteTitle}
        setNotetitle={setNotetitle}
      />

      <NoteList
        notes={notes}
        setEdit={setEdit}
        setNotes={setNotes}
        setUpdate={setUpdate}
        setNotetitle={setNotetitle}

        check={check}
        setCheck={setCheck}
      />
      
    </div>
  );
}

export default App;
