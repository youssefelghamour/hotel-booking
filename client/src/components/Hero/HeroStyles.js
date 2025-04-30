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
    }
});

export default styles;