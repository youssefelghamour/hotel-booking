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
        // padding: '1rem',
        background: '#fff',
        boxShadow: 'rgb(0 0 0 / 21%) 4px 4px 16px',
        ':hover': {
            transform: 'scale(1.01)',
        },
        transition: 'transform 0.2s',
        //display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '450px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateAreas: "room-left room-right",
        //alignItems: 'flex-start',
        gap: '15px',
    },

    roomInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginRight: '19px', // gap on the left 15px + 4px picture padding
        boxSizing: 'border-box',
        //padding: '10px',
    },

    roomImage: {
        width: '220px',
        height: '220px',
        objectFit: 'cover',
        padding: '4px',
    },

    roomTitle: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        marginTop: '0',
        color: '#2b3ab6',
    },

    roomAmenities: {
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '0.5rem',
        size: '1.2rem',
        color: '#555',
    },

    roomPrice: {
        fontSize: '20px',
        margin: '8px 0 5px 0',
    },

    roomAvailability: {
        fontSize: '14px',
        margin: '0 0 8px 0',
    },

    button: {
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
    }
});

export default styles;