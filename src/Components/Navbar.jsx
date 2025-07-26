import React,{useState,useContext} from 'react'
import { todoWrapper } from "../Wrapper.jsx"
import {NavLink} from "react-router-dom"

const Navbar = () => {
    const {category, popUp, setPopUp,hidden, setHidden} = useContext(todoWrapper)
    const handleHidden = () => {
        if (hidden == "hidden") {
            setHidden("block")
        }
        else {
            setHidden("hidden")
        }
    }
    const tabs = category.map((item, index) => {
        console.log(item)
        return (
            <NavLink onClick={handleHidden} to={`/${item}?type=${item}`} key={index} className={({ isActive }) =>
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
      <div className="mt-[1rem] ml-[0.5rem] bg-white h-[100vh]">
        <button onClick={handleHidden} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center mb-5 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className={`absolute md:relative ${hidden} h-[100vh] z-[20] w-full md:block md:w-auto bg-white`} id="navbar-default">
            <h1 className="text-[2rem] font-bold">Notes</h1>
            <div className="flex flex-col w-[20rem] pl-[0.5rem] gap-[1rem]">
                {category.length > 0 ? tabs : <h1>No data</h1>}
                <button className="bg-blue-500 text-white m-[0.5rem] rounded-2xl py-[0.5rem]" type="button" onClick={handlePopUp}>+</button>  
            </div>
          </div>
      </div>
  )
}

export default Navbar