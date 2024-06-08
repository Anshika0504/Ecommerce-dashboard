import React from 'react'
import {Link} from 'react-router-dom';
function Nav() {
  return (
    <div>
      <ul className="nav-ul">
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add Products</Link></li>
        <li><Link to="/update">Upadate Products</Link></li>
        <li><Link to="/logout">Logout</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/Signup">Register</Link></li>
      </ul>
    </div>
  )
}

export default Nav
