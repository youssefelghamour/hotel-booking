import React, { Component } from "react";
import { css } from 'aphrodite';
import styles from "./HeaderStyles";
import logo from "../../assets/logo.jpg";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: false,
        };
    }

    handleScroll = () => {
        this.setState({ scrolled: window.scrollY > 50 });
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <header className={css(styles.appHeader, this.state.scrolled && styles.scrolledHeader)}>
                <div className={css(styles.headerLogoContainer)}>
                    <img src={logo} alt="logo" className={css(styles.headerLogo)} />
                    <h2 className={css(styles.appHeaderTitle)}>Aurum</h2>
                </div>
    
                <nav className={css(styles.nav)}>
                    <a className={css(styles.navLink)} href="/">Home</a>
                    <a className={css(styles.navLink)} href="/rooms">Rooms</a>
                    <a className={css(styles.navLink)} href="/dining">Dining</a>
                    <a className={css(styles.navLink)} href="/spa">Spa</a>
                    <a className={css(styles.navLink)} href="/gallery">Gallery</a>
                    <a className={css(styles.navLink)} href="/about">About Us</a>
                    <a className={css(styles.navLink)} href="/contact">Contact</a>
                    <a className={css(styles.navLink)} href="/login">Login | Track Reservations</a>
                </nav>
            </header>
        );
    }
}


export default Header;