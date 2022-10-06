
import './navbar.styles.css';
import { NavLink } from "react-router-dom";
import Button from "../../objects/button/button.component";

function Navbar(){
    return(
        <nav className="nav-bar">
        
            <div className="logo-block">
                <a href="/">🏠 Estatery</a>
            </div>
            <div className="navlink-block">
                <NavLink className="navlink" to='/' >Rent</NavLink>   
                <NavLink className="navlink" to='/buy' >Buy</NavLink>
                <NavLink className="navlink" to='/sell' >Sell</NavLink>
                <NavLink className="navlink" to='/resources' >Resources</NavLink>
                <NavLink className="navlink" to='/manage' >Manage Property</NavLink>
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