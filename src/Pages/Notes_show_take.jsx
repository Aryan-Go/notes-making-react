import React, { useContext } from 'react'
import { useSearchParams } from 'react-router-dom';
import { todoWrapper } from "../Wrapper.jsx"
import NoteCard from "../Components/Note_card.jsx"
import Notepopup from "../Components/Note_show_popup.jsx"


const Notes_show_take = () => {
    const { notes, setNotes,add_data_pop,selected_note , set_add_data_pop } = useContext(todoWrapper)
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');
    console.log(type);
    const req_items = notes.filter((item) => item.type == type)
    const note_cards = req_items.map((item, index) => {
        return (
            <NoteCard key={index} data={item} />
        )
    })
    const handleAdd = () => {
        set_add_data_pop(true)
    }
    return (
        req_items.length > 0 ? (
            <div className="ml-[2rem]">
            <h1 className="font-bold text-[3rem] m-[1rem]">Saved Notes</h1>
            <div className="flex flex-row flex-wrap">
                {note_cards}
                {selected_note && (
        <Notepopup img={selected_note.image} title={selected_note.title} para={selected_note.para} />
      )}
                <div onClick={handleAdd} className="m-[2rem] flex flex-col justify-center items-center bg-gray-200 text-white w-[30rem] h-[20rem]">
                    +
                </div>
            </div>
            </div>
        ) : (
            <div className="ml-[1rem]">
            <h1 className="font-bold text-[3rem] m-[1rem]">Saved Notes</h1>
            <div onClick={handleAdd} className="m-[2rem] flex flex-col justify-center items-center bg-gray-200 text-white w-[30rem] h-[20rem]">
                    +
            </div>
            </div>
        )
    )
}

export default Notes_show_take