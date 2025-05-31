import { useState } from "react";
import "./App.css";
import Header from "./components/HeaderAndSideBar/Header";
import ListDisplay from "./components/Listdisplay/ListDisplay";
import SideBar from "./components/HeaderAndSideBar/SideBar";
import EntryDisplay from "./components/EntryDisplay";
import NewEntryForm from "./components/NewEntryForm";
import SortButton from "./components/Listdisplay/SortButton";

function App() {
  const [entryArray, setEntryArray] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  const [showNewEntryForm, setshowNewEntryForm] = useState(false);

  function newEntryFormModalOpener() {
    setshowNewEntryForm(!showNewEntryForm);

    console.log(showNewEntryForm);
  }

  return (
    <div className="h-screen">
      {!showNewEntryForm &&
        <div>
          <Header newEntryFormModalOpener={newEntryFormModalOpener} />
          <div className="flex h-full  md:justify-center relative">
            <div className="max-md:hidden h-full">
              <SideBar newEntryFormModalOpener={newEntryFormModalOpener} />
            </div>
            <SortButton />
            <ListDisplay array={entryArray} />
          </div>
        </div>
      }
      {/* <EntryDisplay/>  */}
      {showNewEntryForm && <NewEntryForm />}
    </div>
  );
}

export default App;
