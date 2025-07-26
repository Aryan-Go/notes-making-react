import React, { useContext,useState} from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {useSearchParams} from "react-router-dom"
import { todoWrapper } from "../Wrapper.jsx"

const Add_notes = (props) => {
    const { set_add_data_pop, add_data_pop, setNotes } = useContext(todoWrapper)
    const [title,set_title] = useState("")
    const [para,set_para] = useState("")
    const [url, set_url] = useState()
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');
    const [error,setError] = useState(undefined)
    console.log(type);
    const handleClick = (title, url, para, type) => {
        const note = {
            title: title,
            image: url,
            para: para,
            type : type
        }
        if (title.trim() && para.trim() && para.trim()) {
            setError(undefined)
            setNotes((prev) => {
                return [...prev,note]
            })
            console.log("Data has been added")
            set_title("")
            set_url("")
            set_para("")
        set_add_data_pop(false)
            
        }
        else {
            setError("some details are left empty please check")
            console.log(error)
        }
    }
  return (
    <Popup contentStyle={{
      borderRadius: "1rem",
          width: "50rem",
      height : "min",
      maxHeight: "60rem",
      overflowY : "auto"
        
    }} className="rounded-2xl" open={add_data_pop} closeOnDocumentClick onClose={() => set_add_data_pop(false)}>
          <div className="modal m-0 flex flex-col rounded-2xl">
              {error==undefined ? (
                  <form className="flex m-0 flex-col h-max">
                  {url ? <img className="rounded-2xl flex justify-center items-center text-[2rem] text-gray-600 bg-gray-300 w-[100%] mb-[2rem] h-[20rem] pt-0 mt-0" src={url} alt="preview"/> : <label htmlFor="file-upload" className="flex justify-center items-center text-[2rem] text-gray-600 bg-gray-300 w-[100%] mb-[2rem] h-[15rem] pt-0 mt-0">+</label>}
                  <input require="true" accept="image/*" id="file-upload" name="file-upload" type="file"
                      onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                              set_url(URL.createObjectURL(e.target.files[0]))
                          }
                      }}
                  className="hidden file-upload mb-[2rem]"/>    
                <input require="true" value={title} onChange={(e) => set_title(e.target.value)} placeholder="Title" className="w-[100%] text-black p-[1rem] outline-none rounded-2xl mt-[2rem]"></input>
                <textarea require="true" value={para} onChange={(e) => set_para(e.target.value)} placeholder="Description" className="w-[100%] text-black mt-[2rem] p-[1rem] h-[10rem] outline-none rounded-2xl"></textarea>
                  <input readOnly value={type} placeholder="Description" className="w-[100%] text-black mt-[2rem] p-[1rem] outline-none rounded-2xl"></input>
                  <div className="flex flex-row w-[100%] justify-end">
                      <button type="button" className="bg-blue-500 w-[8rem] p-[1rem] text-white m-[0.5rem] rounded-2xl" onClick={() => handleClick(title, url, para, type)} >Add</button>
                    </div>
              </form>
              ) : (
                      <div>
                        <form className="flex m-0 flex-col h-max">
                            {url ? <img className="rounded-2xl flex justify-center items-center text-[2rem] text-gray-600 bg-gray-300 w-[100%] mb-[2rem] h-[20rem] pt-0 mt-0" src={url} alt="preview"/> : <label htmlFor="file-upload" className="flex justify-center items-center text-[2rem] text-gray-600 bg-gray-300 w-[100%] mb-[2rem] h-[15rem] pt-0 mt-0">+</label>}
                            <input require="true" accept="image/*" id="file-upload" name="file-upload" type="file"
                                onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        set_url(URL.createObjectURL(e.target.files[0]))
                                    }
                                }}
                            className="hidden file-upload mb-[2rem]"/>    
                            <input require="true" value={title} onChange={(e) => set_title(e.target.value)} placeholder="Title" className="w-[100%] text-black p-[1rem] outline-none rounded-2xl mt-[2rem]"></input>
                            <textarea require="true" value={para} onChange={(e) => set_para(e.target.value)} placeholder="Description" className="w-[100%] text-black mt-[2rem] p-[1rem] h-[10rem] outline-none rounded-2xl"></textarea>
                            <input readOnly value={type} placeholder="Description" className="w-[100%] text-black mt-[2rem] p-[1rem] outline-none rounded-2xl"></input>
                            <div className="flex flex-row w-[100%] justify-end">
                                <button type="button" className="bg-blue-500 w-[8rem] p-[1rem] text-white m-[0.5rem] rounded-2xl" onClick={() => handleClick(title, url, para, type)} >Add</button>
                            </div>
                        </form>
                        <h1 className="text-center text-[2rem] text-red-500">{error}</h1>
                        </div>
              )}
              
              
      </div>
      </Popup>
  )
}

export default Add_notes