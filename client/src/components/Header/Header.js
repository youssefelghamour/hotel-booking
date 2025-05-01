import React, { Component } from "react";
import { css } from 'aphrodite';
import styles from "./HeaderStyles";
import logo from "../../assets/logo.jpg";


class Header extends Component {
    render() {
        return (
            <header className={css(styles.appHeader)}>
                <div className={css(styles.headerLogoContainer)}>
                    <img src={logo} alt="logo" className={css(styles.headerLogo)} />
                    <h2 className={css(styles.appHeaderTitle)}>Aurum</h2>
                </div>
    
                <nav className={css(styles.nav)}>
                    <a className={css(styles.navLink)} href="http://localhost:3000">Home</a>
                    <a className={css(styles.navLink)} href="http://localhost:3000">Rooms</a>
                    <a className={css(styles.navLink)} href="http://localhost:3000">About Us</a>
                    <a className={css(styles.navLink)} href="http://localhost:3000">Login</a>
                </nav>
            </header>
        );
    }
}


export default Header;