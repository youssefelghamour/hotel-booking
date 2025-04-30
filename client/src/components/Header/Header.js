import React, { Component } from "react";
import { css } from 'aphrodite';
import styles from "./HeaderStyles";


class Header extends Component {
    render() {
        return (
            <header className={css(styles.appHeader)}>
                <div className={css(styles.headerLogoContainer)}>
                    <h2 className={css(styles.appHeaderTitle)}>Vermillion</h2>
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