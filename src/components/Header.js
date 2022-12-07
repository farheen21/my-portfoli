import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/favicon.svg'
export default function Header() {
  return (
    <header className='Header'>
      <nav>
        <Link className='logo' to="/">
           <img src={logo} class="w-24" alt="Logo"/>
        </Link>
        <NavLink to="/about">
           About
        </NavLink>
        <NavLink to="/job">
           Experience
        </NavLink>
        <NavLink to="/projects">
          Work
        </NavLink>
        <NavLink to="/projects">
          Contact
        </NavLink>
      </nav>
    </header>
  )
}
