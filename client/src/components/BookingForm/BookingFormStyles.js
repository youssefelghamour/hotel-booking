import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    bookingForm: {
        padding: '2rem',
        maxWidth: '600px',
        margin: '0 auto',
        background: '#fff',
        boxShadow: 'rgb(0 0 0 / 21%) 4px 4px 16px',
        position: 'relative',
        width: '700px',
        top: '-170px',
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
        marginTop: '1rem',
        padding: '1rem',
        background: '#f5f5f5',
        borderRadius: '4px',
        boxShadow: 'rgb(0 0 0 / 15%) 2px 2px 8px',
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
        padding: '0.5rem 1rem',
        background: '#ceb472',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        ':disabled': {
        background: '#ccc',
        cursor: 'not-allowed',
        },
    },
});

export default styles;