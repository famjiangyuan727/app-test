import { StyleSheet } from 'react-native'
import { Colors } from '../../style'

const styles = StyleSheet.create({
    flexView: {
        flex: 1,
    },
    contentContainer: {
        minWidth: 55,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 10
    }
})

export default styles