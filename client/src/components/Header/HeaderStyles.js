import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        position: 'fixed',
        top: 0,
        zIndex: '100',
        height: 'fit-content',
    },

    headerTopBar: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        //color: '#333',
        zIndex: 99,
        height: '2rem',
        justifyContent: 'space-between',
        backgroundColor: '#212121d4',
        backdropFilter: 'blur(10px)',
        color: 'white',
        //padding: '1.5rem 0 0.5rem 0',
        fontSize: '12px',
        padding: '0 3%',
    },

    appHeader: {
        height: '3.5rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: '20px',
        //color: '#2b3ab6',
        width: '100%',
        //backgroundColor: 'white',
        padding: '1% 3%',
        justifyContent: 'space-between',
        backgroundColor: '#21212100',
        backdropFilter: 'blur(10px)',
        color: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 11px',
    },

    scrolledHeader: {
        backgroundColor: '#21212194',
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
        fontFamily: 'Montserrat, sans-serif',

        ':hover': {
            color: 'white',
        },
    },
});

export default styles;