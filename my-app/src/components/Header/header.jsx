import React, { useState } from "react";
import "./header.css"
import { Link } from "react-router-dom";
import useOnline from "../../Utils/useOnline";
import { useContext } from "react";
import UserContext from "../../Utils/UserContex";
import { useSelector } from "react-redux";
function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const isOnline=useOnline();
    const {user}=useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
    return (
        <header className="site-header" id="site-header">
            <div className="container ">
                <Link to="/"><h1>FOODVILLA</h1></Link>
                <ul className="nav-item">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/instamart">Instamart</Link></li>
                    <li><Link to="/cart">Cart</Link><p> {cartItems.length}</p> </li>
                </ul>
                {/* {
                    !isOnline? <p>OFFLINE</p>:<p>ONLINE</p>
                } */}
                {isLoggedIn ? (
                    <div className="user" >
                   <p>{" " + user.name +" "}</p> 
                                    <button className="login-button" onClick={() => setIsLoggedIn(false)}>Logout</button>

                    </div>
            ) : (
            <button className="login-button" onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
            </div>

        </header>

    );
}
export default Header;