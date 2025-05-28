import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    LoginContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    loginForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        padding: '20px',
    },

    inputField: {
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
    },

    submitButton: {
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#126ac9',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: '#0056b3',
        },
    },

    helpText: {
        fontSize: '13px',
        marginTop: '10px',
        color: '#666',
        textAlign: 'center',
        fontStyle: 'italic',

        'a': {
            color: '#1E90FF',
            textDecoration: 'none',
        },

        'a:hover': {
            textDecoration: 'underline',
        },
    },

});

export default styles;