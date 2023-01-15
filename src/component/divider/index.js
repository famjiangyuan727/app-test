import React from 'react'
import { View } from 'react-native'
import styles from './style'

class Divider extends React.Component {
    render() {
        return (
            <View style={[styles.divider, styles.horizontal]}/>
        )
    }
}

Divider.propTypes = {
}

Divider.defaultProps = {
}

export default Divider