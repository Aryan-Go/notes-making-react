import React, { useContext,useState} from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { todoWrapper } from "../Wrapper.jsx"

const Note_show_popup = (props) => {
  const {note_popup,setNote_popup } = useContext(todoWrapper)
  const handleText = () => {
    setNote_popup(false)
  }
    console.log(props)
  return (
    <Popup contentStyle={{
          borderRadius: "1rem",
          overflowY: "auto",
          height: "max",
      maxHeight: "50rem",
      width: "50rem",
          overflowX : "hidden"
        
        
    }} hideOnOutsideClick={false} className="rounded-2xl" open={note_popup} closeOnDocumentClick onClose={() => setNote_popup(false)}>
       <div className="m-[2rem] w-[90%] flex flex-col justify-center items-center text-wrap">
            <img className="w-[25rem] h-[25rem] rounded-2xl" src={props.img} alt="image" />
              <h1 className="font=bold text-[2rem]">{props.title}</h1>
              <p className="text-[1.2rem] text-wrap"> {props.para}</p>  
            <button type="button" className="bg-blue-500 w-[100%] text-white m-[0.5rem] rounded-2xl" onClick={handleText} >Done</button>
        </div>
      </Popup>
  )
}

export default Note_show_popup