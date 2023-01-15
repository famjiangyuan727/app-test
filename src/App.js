/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigator from './navigation';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <AppNavigator />
        )
    }
}

export default App;
