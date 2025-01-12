//  import React from 'react';



//import {HoverMenuButton} from "./HoverMenuButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCartShopping, faEllipsisVertical, faStore } from '@fortawesome/free-solid-svg-icons';
import logo from './Logo2.png';
// import { Link } from "react-router-dom"


function Header(search) {

    return (
     <>
            <div className="main-header">
                <header className="header">
                    <div className="header-logo">
                        {/* <Link to="/" > */}
                         <img className='image' src={logo} alt="Logo"></img>
                          {/* </Link> */}
                    </div>
                    <div className="header-search">
                        <form action={search}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <input name="query" ></input>
                            <button type="submit">Search</button>
                        </form>
                    </div>
                    <div className="header-login">
                        <a title="Login">
                            {/* <Link to=""> */}
                                <button>
                                    < FontAwesomeIcon icon={faUser} />
                                    Login
                                </button>
                            {/* </Link> */}

                            {/* <HoverMenuButton title="Dropdown 1"  /> 
                                <HoverMenuButton title="Dropdown 2" /> */}
                        </a>
                    </div>
                    <div className="header-cart">
                        {/* <Link to={"#"}> */}
                        <a title="Login">
                            <FontAwesomeIcon icon={faCartShopping} /> Cart
                        </a>
                        {/* </Link> */}
                    </div>
                 
                    <div className="store-section">
                        {/* <Link to={"#"}> */}
                        <a title="Become a seller">
                            <FontAwesomeIcon icon={faStore} />
                        </a>
                    {/* </Link> */}
                    </div>
                    <div className="header-dropdown-button">
                        {/* <Link to={"Login"}> */}
                        <a title="Login">
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </a>
                        {/* </Link> */}
                    </div>
                </header>
            </div>
        
          
            </>
             )
            }
            export default Header;