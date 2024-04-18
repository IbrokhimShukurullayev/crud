import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import { useSelector , useDispatch } from "react-redux"

import { PiSunBold } from "react-icons/pi";
import { MdOutlineDarkMode } from "react-icons/md";
import {toggleMode} from "../../context/themeSlice"


function Navbar() {
  const users = useSelector(s=> s.users.value)
  const theme = useSelector(s=> s.theme.value)
  const dispatch = useDispatch()

  return (
    <div className={` ${theme ? "dark" : "light"}`}>
      <div className="navbar">
        <h2>Redux Toolkit</h2>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/create-user"}>Create user</NavLink>
        <NavLink to={"/all-users"}>All users <sup>{users.length}</sup></NavLink>
        <button onClick={()=> dispatch(toggleMode())}> {theme ? <PiSunBold/> :<MdOutlineDarkMode/> }</button>
    </div>
    </div>
  )
}

export default Navbar