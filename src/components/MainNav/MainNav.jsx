import './MainNav.scss'
import React from 'react';
let MainNav = (props)=> {

  return (
    <nav className='navbar'>
      <ul className='mainmenu'>
        <li className='mainmenu__item'>Book</li>
        <li className='mainmenu__item'>Plan</li>
        <li className='mainmenu__item'>Fly</li>
        <li className='mainmenu__item' onClick={props.openModal}>Aeroplans</li>
      </ul>
    </nav>
  )
}

export default MainNav;