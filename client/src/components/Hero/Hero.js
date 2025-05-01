import { Component } from "react";
import heroImage from "../../assets/img1.jpg";
import { css } from 'aphrodite';
import styles from "./HeroStyles";



class Hero extends Component {
    render() {
        return (
            <div className={css(styles.hero)}>
                <h2 className={css(styles.heroHeader)}>VERMILLION</h2>
                <p className={css(styles.heroText)}>Modern Tranquility, Beautifully Delivered.</p>
                <img src={heroImage} alt="hero" className={css(styles.heroImage)} />
            </div>
        );
    }
}


export default Hero;