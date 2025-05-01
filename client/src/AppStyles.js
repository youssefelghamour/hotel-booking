import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    hide: {
        opacity: 0,
        pointerEvents: 'none',
        transition: 'opacity 0.5s ease',
    },

    show: {
        opacity: 1,
    },

    flashMessage: {
        position: 'fixed',
        top: '50%',
        background: '#73b573',
        padding: '10px 15px',
        borderRadius: '10px',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        color: 'white',
        boxShadow: '0px 0px 5px #0000006e',
    },
    
    flashText: {
        padding: 0,
        margin: 0,
        marginLeft: '10px',
    },
});

export default styles;