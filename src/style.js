import { StyleSheet } from 'react-native'

export const Colors = {
    primary: '#FF8C00',
    black: '#1B1B1B',
    white: '#FFFFFF',
    grey: '#DAD4C7',
    silver: '#F7F7F7',
    transparent: 'transparent',

    disabledColorValue: '50',
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.white,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    imageResizeMode: {
        resizeMode: 'contain'
    },
    form: {
        alignContent: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    formItem: {
        marginVertical: 10
    },
    headerIcon: {
        width: 25,
        height: 25
    }
})

export default styles