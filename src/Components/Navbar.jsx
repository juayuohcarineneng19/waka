import React from 'react'
import { Component } from 'react'
import styles from './NavbarStyles.css'
import {menuItems} from "./MenuItems"
import {Link} from "react-router-dom"

class Navbar extends Component {

  state = {clicked:false}
    handleClick = () =>{
     this.setState ({clicked: !this.state.clicked})
   }

  render(){

return (
 <nav className='navbarItems'>
     <h1 className="navbar-logo">Waka</h1>
     <div className="menu-icons" onClick={this.handleClick}>
        <i className= {this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
     </div>
     <ul className= {this.state.clicked ? "nav-menu active" : "nav-menu"}>
         {menuItems.map((items, index) =>{
             return(
                <li key = {index}>
                 <Link to ={items.url} className = {items.cName}>
                 <i className= {items.icon}></i>
                 {items.title}
                 </Link>
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