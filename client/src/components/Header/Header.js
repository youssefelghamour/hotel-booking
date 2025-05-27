import React, { Component } from "react";
import { css } from 'aphrodite';
import styles from "./HeaderStyles";
import logo from "../../assets/logo.jpg";
import { CiMail } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { SlPhone } from "react-icons/sl";



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
            <div className={css(styles.headerContainer, this.state.scrolled && styles.scrolledHeader)}>
                {!this.state.scrolled && (
                    <div className={css(styles.headerTopBar)}>
                        <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <SlPhone /> +123 456 789 000 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <CiMail /> info@aurum.com
                        </p>
                        <div style={{ color: '#ceb472' }}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    </div>
                )}

                <header className={css(styles.appHeader, this.state.scrolled && styles.scrolledHeader)}>
                    <div className={css(styles.headerLogoContainer)}>
                        <img src={logo} alt="logo" className={css(styles.headerLogo)} />
                        <h2 className={css(styles.appHeaderTitle)}>Aurum</h2>
                    </div>
        
                    <nav className={css(styles.nav)} >
                        <a className={css(styles.navLink)} style={ this.state.scrolled ? { color: '#e6d3b3'} : { color: '#3a3a3a' } } href="/">Home</a>
                        <a className={css(styles.navLink)} style={ this.state.scrolled ? { color: '#e6d3b3'} : { color: '#3a3a3a' } } href="/rooms">Rooms</a>
                        <a className={css(styles.navLink)} style={ this.state.scrolled ? { color: '#e6d3b3'} : { color: '#3a3a3a' } } href="/dining">Dining</a>
                        <a className={css(styles.navLink)} style={ this.state.scrolled ? { color: '#e6d3b3'} : { color: '#3a3a3a' } } href="/spa">Spa</a>
                        <a className={css(styles.navLink)} style={ this.state.scrolled ? { color: '#e6d3b3'} : { color: '#3a3a3a' } } href="/gallery">Gallery</a>
                        <a className={css(styles.navLink)} style={ this.state.scrolled ? { color: '#e6d3b3'} : { color: '#3a3a3a' } } href="/about">About Us</a>
                        <a className={css(styles.navLink)} style={ this.state.scrolled ? { color: '#e6d3b3'} : { color: '#3a3a3a' } } href="/contact">Contact</a>
                        <a className={css(styles.navLink)} style={ this.state.scrolled ? { color: '#e6d3b3'} : { color: '#3a3a3a' } } href="/login">Login | Track Reservations</a>
                    </nav>
                </header>
            </div>
        );
    }
}


export default Header;