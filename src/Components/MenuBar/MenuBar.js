import userEvent from '@testing-library/user-event'
import React from 'react'
import { Button } from 'react-bootstrap-v5'
import { Link } from 'react-router-dom'
import useFirebase from '../hook/useFirebase'

const MenuBar = () => {
    const{user,logOut}=useFirebase();
  return (
    <div style={{display:"flex"}}>
        <div >
            <h2>Online shop</h2>
        </div>
        <div>
            <ul style={{display:"flex",marginLeft:"500px"}}>
                <li style={{margin:"15px",listStyle:"none"}}>
                    <Link style={{textDecoration:"none"}} to="/home">Home</Link>
                </li>
                <li style={{margin:"15px",listStyle:"none"}}>
                    <Link style={{textDecoration:"none"}} to="/about">About</Link>
                </li>
                <li style={{margin:"15px",listStyle:"none"}}>
                    <Link style={{textDecoration:"none"}} to="/service">Service</Link>
                </li>
                <li style={{margin:"15px",listStyle:"none"}}>
                    <Link style={{textDecoration:"none"}} to="/register">Register</Link>
                </li>
                {user.email?
                    <p>sign In :{user.displayName}</p>
                }
                
                {
                    user.email?
                    <Button onClick={logOut}>LogOut</Button>
                    :
                    <li style={{margin:"15px",listStyle:"none"}}>
                    <Link style={{textDecoration:"none"}} to="/login">Login</Link>
                </li>
                }
                
            </ul>
        </div>
    </div>
  )
}

export default MenuBar