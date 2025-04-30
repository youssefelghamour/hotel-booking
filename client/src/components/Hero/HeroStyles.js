import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    hero: {
        height: '700px',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
    },

    heroImage: {
        position: 'relative',
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    },

    heroHeader: {
        position: 'absolute',
        zIndex: '1',
        justifySelf: 'anchor-center',
        color: 'white',
        fontSize: '146px',
        fontFamily: 'Raleway, sans-serrif',
    },
});

export default styles;