import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">📱 Phonebook</div>
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/add">Add Contact</NavLink></li>
        <li><NavLink to="/contacts">All Contacts</NavLink></li>
        <li><NavLink to="/filter">Filter</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
