import { Component } from "react";
import './navbar.styles.css';
import { Link } from "react-router-dom";
import Button from "../../objects/button/button.component";

function Navbar(){
    return(
        <nav className="nav-bar">
        
            <div className="logo-block">
                <h5>Estatery</h5>
            </div>
            <div className="navlink-block">
                <Link className="navlink" to='/' >Rent</Link>   
                <Link className="navlink" to='/buy' >Buy</Link>
                <Link className="navlink" to='/sell' >Sell</Link>
                <Link className="navlink" to='/manage' >Manage Property</Link>
                <Link className="navlink" to='/resources' >Resources</Link>
            </div>
            <div className="button-block">
                <Button
                    style={"btn btn-white"}
                    name="Login"
                />
                <Button
                    style={"btn btn-blue"}
                    name="Sign up"
                />
            </div>
        
        </nav>
    )
}

export default Navbar;