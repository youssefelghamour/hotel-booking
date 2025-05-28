import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    bookingFormContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '25px',
        width: '92%',
        //top: '-170px',
        position: 'relative',
        alignItems: 'center',
        justifySelf: 'center',
        marginTop: 'calc(5.5rem + 2%)', // to account for the header (3.5rem header + 2rem topHeader) and header padding (2%)
    },

    bookingForm: {
        padding: '2rem',
        maxWidth: '600px',
        margin: '0 auto',
        background: '#fff',
        boxShadow: 'rgb(0 0 0 / 21%) 4px 4px 16px',
        position: 'relative',
        width: '700px',
    },

    header: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
        textAlign: 'center',
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },

    formGroup: {
        display: 'flex',
        flexDirection: 'column',
    },

    label: {
        fontSize: '1rem',
        marginBottom: '0.5rem',
        color: '#2b3ab6',
    },

    input: {
        padding: '0.5rem',
        fontSize: '1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },

    roomInfo: {
        marginTop: '-1.5rem',
        padding: '1rem',
        /*background: '#f5f5f5',
        borderRadius: '4px',
        boxShadow: 'rgb(0 0 0 / 15%) 2px 2px 8px',*/
        top: '-170px',
        background: 'transparent',
    },

    roomImage: {
        width: '100%',
        height: '300px',
        objectFit: 'cover',
        margin: '25px 0 15px 0',
    },

    roomTitle: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        color: '#2b3ab6',
    },

    roomText: {
        margin: '0.3rem 0',
    },

    button: {
        marginTop: '1rem',
        padding: '0.7rem 1rem',
        background: '#ceb472',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        ':disabled': {
            background: '#ccc',
            cursor: 'not-allowed',
        },
        ':hover': {
            background: '#b0a05c',
        },
    },

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
        right: '2%',
        bottom: '3%',
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