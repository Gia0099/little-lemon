import React from "react";
import littlelemon_logo from "../images/littlelemon_logo.png"
import { Link } from 'react-router-dom'; // 确保导入 Link 组件

const Nav = () => {
    return(
        <nav>
            {/*<img src={littlelemon_logo} alt="Little Lemon Logo" ></img>*/}
            {/*<ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>

            </ul>*/}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/booking">Booking Table</Link>
            <Link to="/order-online">Order Online</Link>
            <Link to="/login">Login</Link>
            
        </nav>
    )
}

export default Nav;