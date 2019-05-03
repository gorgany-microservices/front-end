import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faPhone, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header-top">
                    <div className="logo">
                        <a href="/">
                            <img src="/logo.png" alt="Company logo (Gorgany Rework)"/>
                        </a>
                    </div>
                    <div className="search-form-container">
                        <form action="#" className="search-form">
                            <input type="text" className="search-input" placeholder="Find equipment and clothes"/>
                            <span className="search-icon">
                                <FontAwesomeIcon icon={faSearch}/>
                            </span>
                        </form>
                    </div>
                    <div className="blank-spot"/>
                    <div className="phone-number-container">
                        <span className="phone-number-icon">
                            <FontAwesomeIcon icon={faPhone}/>
                        </span>
                        <span className="phone-number-text">(095) 810 73 55</span>
                    </div>
                    <div className="separator"/>
                    <div className="user-profile-container">
                        <span className="user-circle-icon">
                            <FontAwesomeIcon icon={faUserCircle}/>
                        </span>
                        <span className="phone-number-text">Personal account</span>
                    </div>
                    <div className="wish-list-container">
                        <span className="fa fa-heart wish-list-icon"/>
                    </div>
                    <div className="shopping-basket-container">
                        <span className="fa fa-shopping-basket shopping-basket-icon"/>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="menu-list">
                        <a href="https://google.com" className="menu-list-item">Equipment</a>
                        <a href="https://google.com" className="menu-list-item">Clothes</a>
                        <a href="https://google.com" className="menu-list-item">Footwear</a>
                        <a href="https://google.com" className="menu-list-item">For Men</a>
                        <a href="https://google.com" className="menu-list-item">For Women</a>
                        <a href="https://google.com" className="menu-list-item">For Children</a>
                        <a href="https://google.com" className="menu-list-item">Purpose</a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;