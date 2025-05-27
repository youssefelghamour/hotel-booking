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
        justifyContent: 'space-around',
        position: 'fixed',
        zIndex: '100',
        backgroundColor: '#212121d4',
        backdropFilter: 'blur(10px)',
        color: 'white',
    },

    scrolledHeader: {
        boxShadow: '0 8px 16px #0003',
        transition: 'background-color 0.55s ease',
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
        height: 30,
        filter: 'contrast(1.5)',
        borderRadius: '10px',
    },
  
    nav: {
        display: 'flex',
        alignItems: 'center',
    },
  
    navLink: {
        textDecoration: 'none',
        fontSize: 15,
        margin: '0 12px',
        transition: 'color 0.3s ease',
        fontWeight: 'bold',
        color: '#e6d3b3',
        fontFamily: 'Montserrat, sans-serif',

        ':hover': {
            color: 'white',
        },
    },
});

export default styles;