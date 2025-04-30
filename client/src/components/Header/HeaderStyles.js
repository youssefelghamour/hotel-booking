import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    appHeader: {
        height: '8%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: '20px',
        color: '#2b3ab6',
        width: '100%',
        backgroundColor: 'white',
        padding: '1% 3%',
        justifyContent: 'space-between',
        position: 'absolute',
        zIndex: '1',
        background: 'transparent',
    },
  
    headerLogoContainer: {
        display: 'flex',
        alignItems: 'center',
    },
  
    appHeaderTitle: {
        fontSize: 18,
        marginLeft: 10,
    },
  
    headerLogo: {
        height: 40,
        filter: 'contrast(1.5)',
    },
  
    nav: {
        display: 'flex',
        alignItems: 'center',
    },
  
    navLink: {
        textDecoration: 'none',
        color: '#2b3ab6',
        fontSize: 17,
        margin: '0 12px',
        transition: 'transform 0.3s ease',
        fontWeight: 'bold',

        ':hover': {
            transform: 'scale(1.1)',
        },
    },
});

export default styles;