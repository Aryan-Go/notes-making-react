import React, { useState,createContext} from 'react'
export const todoWrapper = createContext(null);
const Wrapper = (props) => {
    const [notes, setNotes] = useState([]);
    const [category, setCategory] = useState(["Life", "School", "Friends", "Work"])
  const [popUp, setPopUp] = useState(false)
  const [selected_note,set_selected_note] = useState()
  const [note_popup, setNote_popup] = useState(false)
  const [add_data_pop, set_add_data_pop] = useState(false)
  const [hidden, setHidden] = useState("hidden")
  return (
      <todoWrapper.Provider value={{hidden, setHidden,selected_note,set_selected_note,notes,setNotes,category,setCategory,popUp,setPopUp,note_popup,setNote_popup,add_data_pop , set_add_data_pop}}>
          { props.children }
    </todoWrapper.Provider>
  )
}

export default Wrapper