import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/favicon.svg'
export default function Header() {
  return (
    <header className='Header'>
      <nav>
        <Link className='logo' to="/">
           <img src={logo} alt="Logo"/>
        </Link>
        <NavLink>
            
        </NavLink>
      </nav>
    </header>
  )
}
