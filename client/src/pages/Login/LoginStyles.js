import { StyleSheet } from 'aphrodite';
import loginPic from "../../assets/login-pic.jpg";

const styles = StyleSheet.create({
    loginPage: {
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        height: '100vh',
    },

    loginLeft: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.73),rgba(0, 0, 0, 0.39)), url(${loginPic})`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        color: 'white',
        textAlign: 'center',
    },

    title: {
        fontFamily: 'Raleway, sans-serriff',
        fontSize: '3rem',
        fontWeight: 'bold',
        margin: 0,
    },

    subTitle: {
        fontFamily: 'Raleway, sans-serif',
        fontSize: '2rem',
        fontWeight: 'normal',
        margin: 0,
        marginBottom: '5rem',
    },

    message1: {
        fontFamily: 'Raleway, sans-serriff',
        fontSize: '1.2rem',
        marginBottom: '0',
    },

    message2: {
        fontFamily: 'Raleway, sans-serriff',
        fontSize: '1rem',
        marginBottom: '5rem',
    },

    buttonGroup: {
        marginTop: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },

    bookButton: {
        marginTop: '0.5rem',
        padding: '0.5rem 1rem',
        background: '#ceb472',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        width: 'fit-content',
        ':disabled': {
            background: '#ccc',
            cursor: 'not-allowed',
        },
        ':hover': {
            background: '#b0a05c',
        },
    },

    homeButton: {
        padding: '0.5rem 1rem',
        background: 'white',
        color: '#00315b',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        width: '100%',

        ':hover': {
            background: 'lightgray',
            color: 'black',
        },
    },






    loginForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '40px',
        background: 'white',
    },
});

export default styles;