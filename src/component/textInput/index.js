import React from 'react'
import { TextInput } from 'react-native'
import styles from './style'

class AppTextInput extends React.Component {

    componentDidMount() {
        if (this.props.onRef != null) {
            this.props.onRef(this)
        }
    }

    getTextStyle = () => {
        const { style } = this.props
        var newStyles = [styles.textInputStyle]
        if (style) {
            newStyles.push(style)
        }
        return newStyles
    }

    onSubmitEditing = () => {
        this.props.onSubmitEditing();
    }
    
    focus = () => {
        this.textInput.focus()
    }

    blur = () => {
        this.textInput.focus()
    }

    render() {
        return (
            <TextInput
                {...this.props} 
                ref={input => this.textInput = input}
                onSubmitEditing={this.onSubmitEditing}
                style={this.getTextStyle()}/>
        )
    }
}

AppTextInput.propTypes = {
}

AppTextInput.defaultProps = {
}

export default AppTextInput