import React from 'react'
import { Component } from 'react'
import styles from './NavbarStyles.css'
import {menuItems} from "./MenuItems"

class Navbar extends Component {

  state = {clicked:false}
    handleClick = () =>{
     this.setState ({clicked: !this.state.clicked})
   }

  render(){

return (
 <nav className='navbarItems'>
     <h1 className="navbar-logo">Trippy</h1>
     <div className="menu-icons" onClick={this.handleClick}>
        <i className= {this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
     </div>
     <ul className= {this.state.clicked ? "nav-menu active" : "nav-menu"}>
         {menuItems.map((items, index) =>{
             return(
                <li key = {index}>
                 <a href="/" className = {items.cName}>
                 <i className= {items.icon}></i>
                 {items.title}
                 </a>
                </li> 
             )
         })}
         <button>Sign Up</button>
     </ul>
 </nav>
)
  }
  
}

export default Navbar