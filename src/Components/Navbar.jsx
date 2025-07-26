import React,{useState,useContext} from 'react'
import { todoWrapper } from "../Wrapper.jsx"
import {NavLink} from "react-router-dom"

const Navbar = () => {
    const {category, popUp, setPopUp} = useContext(todoWrapper)
    
    const tabs = category.map((item, index) => {
        console.log(item)
        return (
            <NavLink to={`/${item}?type=${item}`} key={index} className={({ isActive }) =>
    isActive ? "text-[1.5rem] w-[100%] pl-[0.5rem] rounded-2xl text-black bg-gray-200" : "text-[1.5rem] w-[100%] pl-[0.5rem] rounded-2xl bg-white text-black"}>{item}</NavLink>
        )
    })
    const handlePopUp = () => {
        if (!popUp) {
            setPopUp(true)
        }
        else {
            setPopUp(false)
        }
    }
  return (
      <div className="mt-[1rem] ml-[0.5rem]">
        <h1 className="text-[2rem] font-bold">Notes</h1>
          <div className="flex flex-col w-[20rem] pl-[0.5rem] gap-[1rem]">
            {category.length > 0 ? tabs : <h1>No data</h1>}
            <button className="bg-blue-500 text-white m-[0.5rem] rounded-2xl py-[0.5rem]" type="button" onClick={handlePopUp}>+</button>  
          </div>
      </div>
  )
}

export default Navbar