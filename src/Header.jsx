import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import {PiHandWavingFill} from 'react-icons/pi'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
           <h2 className='user-name'>Hello Shahruk<PiHandWavingFill size={25} className='hi-icon'/></h2>
        </div>
        <div className='header-right'>
        <input type='text' className='search' placeholder='Search'/>
                  </div>
    </header>
  )
}

export default Header