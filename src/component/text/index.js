import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import styles from './style'

class AppTextInput extends React.Component {

    getTextStyle = () => {
        const { style } = this.props
        var newStyles = [styles.textStyle]
        if (style) {
            newStyles.push(style)
        }
        return newStyles
    }

    render() {
        const { text } = this.props

        return (
            <Text
                {...this.props}
                style={this.getTextStyle()}>
                {text}
            </Text>
        )
    }
}

AppTextInput.propTypes = {
    text: PropTypes.string,
}

AppTextInput.defaultProps = {
}

export default AppTextInput