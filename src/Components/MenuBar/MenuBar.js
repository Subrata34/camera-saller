import React from 'react'
import { Link } from 'react-router-dom'

const MenuBar = () => {
  return (
    <div>
        <div>
            <h2>Food Order</h2>
        </div>
        <div>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/service">Service</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default MenuBar