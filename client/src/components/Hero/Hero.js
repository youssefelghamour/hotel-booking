import { Component } from "react";
import heroImage from "../../assets/img1.jpg";
import { css } from 'aphrodite';
import styles from "./HeroStyles";



class Hero extends Component {
    render() {
        return (
            <div className={css(styles.hero)}>
                <img src={heroImage} alt="hero" className={css(styles.heroImage)} />
            </div>
        );
    }
}


export default Hero;