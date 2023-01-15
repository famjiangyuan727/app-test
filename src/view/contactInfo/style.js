import { StyleSheet } from 'react-native'
import { Colors } from '../../style'

const styles = StyleSheet.create({
    headerTextColor: {
        color: Colors.primary
    },
    flexView: {
        flex: 1
    },
    flex0_5: {
        flex: 0.5
    },
    contentContainer: {
        alignItems: 'center',
    },
    infoContainer: {
        backgroundColor: Colors.silver, 
        paddingHorizontal: 20, 
        paddingVertical: 5
    },
    infoTitle: {
        fontSize: 20, 
        fontWeight: 'bold'
    },
    fieldContainer: {
        flexDirection: 'row', 
        paddingHorizontal: 20, 
        paddingVertical: 5, 
        alignItems: 'center'
    },
    profilePic: {
        width: 150,
        height: 150,
        borderRadius: 75,
        margin: 20
    }
})

export default styles