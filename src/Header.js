import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

export default function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }

    }

    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: 'none' }}> 
                {/* <img 
                className="header_logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                /> */}
                <div className="header_logoh1">
                    <h1>Grocery Store </h1>
                </div>
                
            </Link>
             
            <div className="header_search">
                <input className="header_searchInput"
                type="text" />
                <SearchIcon className="header_searchIcon" />
            </div> 
            <div className="header_nav">

                <Link to={!user && "/login"} style={{ textDecoration: 'none' }} >
                <div onClick={ handleAuthentication } className="header_option">
            <span className="header_optionLineOne"> hello {user ? user.email : "Guest"}</span>
                    <span className="header_optionLineTwo">{user ? "sign Out" : "Sign In"} </span>
                </div>
                </Link>

                <div className="header_option">
                    <span className="header_optionLineOne"> Your</span>
                    <span className="header_optionLineTwo"> Orders</span>

                </div>

                {/* <div className="header_option">
                <span className="header_optionLineOne"> </span>
                    <span className="header_optionLineTwo"> Sign In</span>

                </div> */}

                <Link to="/checkout" style={{ textDecoration: 'none' }} >
                    <div className="header_optionBasket">
                    <ShoppingCartIcon />
                    <span className="header_optionLineTwo header_basketCount" > {basket?.length} </span>

                    </div>
                </Link>                        
                

            </div>          
        </div>
    )
}
