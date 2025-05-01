import { Component } from "react";
import logo from "../../assets/logo.jpg";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { css } from 'aphrodite';
import styles from './FooterStyles';


class Footer extends Component {
    render() {
        return (
            <footer className={css(styles.appFooter)}>
                <div className={css(styles.footerContainer)}>
                    <div className={css(styles.footerLogoContainer)}>
                        <div className={css(styles.footerLogoText)}>
                            <img src={logo} className={css(styles.footerLogo)} alt="Logo" />
                            <h3 className={css(styles.footerLogoTextH3)}>AURUM</h3>
                        </div>
                        <h4 className={css(styles.footerLogoH4)}>Modern Tranquility, Beautifully Delivered</h4>
                        <p className={css(styles.footerLogoP)}>Experience elegant comfort, tailored service, and peaceful surroundings in every stay</p>
                    </div>

                    <nav className={css(styles.footerNav)}>
                        <a className={css(styles.footerNavLink)} href="https://github.com/youssefelghamour/markdown2html">Home</a>
                        <a className={css(styles.footerNavLink)} href="https://github.com/youssefelghamour/markdown2html">Rooms</a>
                        <a className={css(styles.footerNavLink)} href="https://github.com/youssefelghamour/markdown2html">About</a>
                        <a className={css(styles.footerNavLink)} href="https://github.com/youssefelghamour/markdown2html">Book Now</a>
                    </nav>
                    
                    <div className={css(styles.footerSocials)}>
                        <FaSquareXTwitter />
                        <FaFacebookSquare />
                        <FaInstagramSquare />
                        <FaLinkedin />

                        <p style={{ fontSize: '12px' }}><b>Copyright</b> &copy; Aurum 2025</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;