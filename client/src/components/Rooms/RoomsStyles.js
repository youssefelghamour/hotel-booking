import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    rooms: {
        padding: '2rem',
        position: 'relative',
        top: '-220px',
    },

    header: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
    },

    roomList: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '1rem',
    },

    room: {
        padding: '1rem',
        background: '#fff',
        boxShadow: 'rgb(0 0 0 / 21%) 4px 4px 16px',
        ':hover': {
            transform: 'scale(1.01)',
        },
        transition: 'transform 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '450px',
    },

    roomImage: {
        width: '200px',
        height: '200px',
        objectFit: 'cover',
        marginLeft: '-30px'
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
        marginTop: '0.5rem',
        padding: '0.5rem 1rem',
        background: '#ceb472',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        ':disabled': {
            background: '#ccc',
            cursor: 'not-allowed',
        }
    }
});

export default styles;