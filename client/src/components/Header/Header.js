import React, { Component } from "react";
import { css } from 'aphrodite';
import styles from "./HeaderStyles";


class Header extends Component {
    render() {
        return (
            <header className={css(styles.appHeader)}>
                <div className={css(styles.headerLogoContainer)}>
                    <h2 className={css(styles.appHeaderTitle)}>Hotel</h2>
                </div>
    
                <nav className={css(styles.nav)}>
                    <a className={css(styles.navLink)} href="#">Home</a>
                    <a className={css(styles.navLink)} href="#">Rooms</a>
                    <a className={css(styles.navLink)} href="#">About Us</a>
                    <a className={css(styles.navLink)} href="#">Login</a>
                </nav>
            </header>
        );
    }
}


export default Header;