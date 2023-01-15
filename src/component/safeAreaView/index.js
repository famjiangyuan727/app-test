import React from 'react';
import PropTypes from 'prop-types';
import {
    StatusBar,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    View
} from 'react-native';
import styles from './style';

class SafeAreaWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        if (this.props.onRef) {
            this.props.onRef(this)
        }
    }

    render() {
        const { refreshControl } = this.props
        return (
            <>
                <StatusBar
                    animated
                    translucent
                    networkActivityIndicatorVisible
                    barStyle={'default'} />
                <KeyboardAvoidingView style={styles.flex}>
                    <View style={styles.mainContainer}>
                        <SafeAreaView style={styles.safeArea}>
                            <ScrollView
                                refreshControl={refreshControl}
                                contentInsetAdjustmentBehavior='automatic'
                                contentContainerStyle={styles.flexGlow}
                                keyboardShouldPersistTaps={'handled'}>
                                <View style={styles.flexGlow}>
                                    {this.props.children}
                                </View>
                            </ScrollView>
                        </SafeAreaView>
                    </View>
                </KeyboardAvoidingView>
            </>
        )
    }
}

SafeAreaWrapper.propTypes = {
    navigation: PropTypes.object.isRequired,
    onRef: PropTypes.func,
    refreshControl: PropTypes.element
}

SafeAreaWrapper.defaultProps = {
    scrollEnabled: true
}

export default SafeAreaWrapper
