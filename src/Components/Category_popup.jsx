import React, { useContext,useState} from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { todoWrapper } from "../Wrapper.jsx"

const Category_popup = (props) => {
  const [cat,setCat] = useState("")
  const {setPopUp,setCategory,category } = useContext(todoWrapper)
  const [error,setError] = useState(undefined)
  const handleClick = (cate) => {
    console.log(cate)
    const same = category.filter((x) => x == cate)
    if (same.length == 0 && cat!="" ) {
      setPopUp(false)
      setError(undefined)
      setCategory((prev) => {
        return [...prev,cate]
      })
      setCat("")
    }
    else {
      setError("Please put a valid value of category")
    }
  }
  return (
    <Popup contentStyle={{
      borderRadius: "1rem",
      width : "30rem"
        
    }} className="rounded-2xl" open={props.popup} closeOnDocumentClick onClose={() => setPopUp(false)}>
      <div className="modal flex flex-col justify-center items-center rounded-2xl p-[2rem]">
        {error == undefined ? (
          <form className="flex flex-col justify-center items-center">
            <input require="true" value={cat} onChange={(e) => setCat(e.target.value)} placeholder="Category Name" className="w-[100%] text-black bg-gray-300 p-[1rem] outline-none rounded-2xl"></input>
            <button type="button" className="bg-blue-500 w-[100%] text-white m-[0.5rem] rounded-2xl" onClick={() => handleClick(cat)} >Add</button>
          </form>
        ) : 
          (
            <div>
               <form className="flex flex-col justify-center items-center">
                <input require="true" value={cat} onChange={(e) => setCat(e.target.value)} placeholder="Category Name" className="w-[100%] text-black bg-gray-300 p-[1rem] outline-none rounded-2xl"></input>
                <button type="button" className="bg-blue-500 w-[100%] text-white m-[0.5rem] rounded-2xl" onClick={() => handleClick(cat)} >Add</button>
              </form>
              <h1 className="text-center text-[2rem] text-red-500">{error}</h1>
            </div>
        )}
         
      </div>
      </Popup>
  )
}

export default Category_popup