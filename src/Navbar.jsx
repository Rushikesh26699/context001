import React, { useContext } from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import{GlobalData} from './App'
const Navbar = () => {
    const{light,dark,SetMsg}=useContext(GlobalData)
    function ChangeTheme(){
        // alert('hello')
        dark(!light)
        SetMsg(<h3>You have changed theme to <span style={{fontSize:'2rem',fontWeight:'900'}}>{light===false? 'dark':'light'}</span></h3>)
        // console.log(light);

    }

    const borderbox={
        color:light===false?'blue':'yellow'
    }
  return (


   <>
    <div style={{boxShadow:`10px 10px 25px ${borderbox.color}`}} className='Navbar'>

        <h1>GeekSter</h1>
        <ul >
            <NavLink to={'/home'}>
            <li style={{color:light===false?"black":"white"}} >Home</li>
            </NavLink>
            <NavLink to={'/about'}>
            <li style={{color:light===false?"black":"white"}}>About</li>
            </NavLink>
            <NavLink to={'/contact'}>
            <li style={{color:light===false?"black":"white"}}>Contact</li>
            </NavLink>
        </ul>
        <button style={{color:light===false?"white":"black",background:light===false?"black":"white"}}
         onClick={()=>{
            ChangeTheme()
        }}>Change Theme to {light===false?'Dark':'Light'}</button>
    </div>
   </>
  )
}

export default Navbar