import { useState,useContext } from 'react'
import Navbar from "./Components/Navbar.jsx"
import PopUp from "./Components/Category_popup.jsx"
import NotePage from "./Pages/Notes_show_take.jsx"
import { todoWrapper } from "./Wrapper.jsx"
import AddNote from "./Components/Add_notes.jsx"


function App() {
const { notes, setNotes, category, setCategory,popUp,setPopUp } = useContext(todoWrapper)
  return (
    <div className="flex flex-row">
      <Navbar className="w-[20rem]"/>
      <PopUp className="w-[20rem] rounded-2xl" popup={popUp} />
      <NotePage />
      <AddNote />
      

    </div>
  )
}

export default App
