import { StyleSheet } from 'react-native'
import { Colors } from '../../style'

export default StyleSheet.create({
    horizontal: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        marginHorizontal: 10
    },
    divider: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.grey
    },
})