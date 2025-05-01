import { StyleSheet } from 'aphrodite';
import footer from '../../assets/footer.jpg';


const styles = StyleSheet.create({
    appFooter: {
        backgroundColor: '#f8f9fa',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        background: 'linear-gradient(225deg, #ceb472, rgb(9 15 63)) !important',
        display: 'flex',
        marginTop: -70,
        color: 'white',
        flexDirection: 'column',
        backgroundImage: `linear-gradient(#000000bf, #000000bf), url(${footer})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
  
    footerContainer: {
        padding: '20px 35px',
        display: 'flex',
        justifyContent: 'space-around',
    },
  
    footerLogoContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
  
    footerLogoText: {
        display: 'flex',
        alignItems: 'center',
    },
  
    footerLogoTextH3: {
        fontSize: 18,
        marginLeft: 10,
    },
  
    footerLogo: {
        height: 40,
        width: 40,
        filter: 'brightness(1.6)',
        borderRadius: '10px',
    },
  
    footerLogoH4: {
        color: '#ceb472',
    },
  
    footerLogoP: {
        fontSize: 13,
        color: '#898989',
        width: '55%',
    },
  
    footerNav: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
  
    footerNavLink: {
        textDecoration: 'none',
        color: 'white',
        fontSize: 17,
        margin: '0 12px',
        transition: 'transform 0.3s ease',
        ':hover': {
            transform: 'scale(1.1)',
        },
    },
  
    footerSocials: {
        fontSize: '2rem',
        marginTop: 20,
    },
});

export default styles;