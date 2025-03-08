import React from 'react'
import { NavbarData } from './NavbarData'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav'>   
      <ul className='navList'>
      {NavbarData.map((val,key)=>{
        return (
          // onClick={() =>{window.location.pathname = val.link}}  
          <li key={key} className='row'>
            <NavLink
             to={val.link}
             className="nav-link"
             activeclassname = "active"
             >
            
              {val.title}
            </NavLink>
          </li>
        );
      })}
      </ul>
    </div>
  )
}

export default Navbar
