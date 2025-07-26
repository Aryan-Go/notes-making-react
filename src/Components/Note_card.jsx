import React,{useContext,useState,useEffect} from 'react'
import { todoWrapper } from "../Wrapper.jsx"

const Note_card = (props) => {
  
     const {note_popup,setNote_popup,selected_note,set_selected_note } = useContext(todoWrapper)
  const handleText = () => {
        set_selected_note(props.data)
        setNote_popup(true)
  }
  useEffect(() => {
    console.log(selected_note)
  } , [selected_note])
  return (
    <>
      <div onClick={handleText} className="m-[2rem] flex flex-col justify-center items-center w-fit">
          <img className="w-[20rem] h-[20rem] rounded-2xl" src={props.data.image} alt="image" />
          <h1>{props.data.title}</h1>
      </div>
      
    </>
  )
}

export default Note_card