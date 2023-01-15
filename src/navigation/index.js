import React from 'react';
import { Image } from 'react-native';
import styles from '../style';
import contact from '../view/contact';
import contactInfo from '../view/contactInfo';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
enableScreens()

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import constant from './constant';
import { Text } from '../component';
import asset from '../asset';
const { Stacks } = constant

export const isMountedRef = React.createRef()
export const navigationRef = React.createRef()

export const navigate = (name, params) => navigationRef.current.navigate(name, params)

export const goBack = () => navigationRef.current.goBack()

export const resetTo = (name) => {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: name }],
    key: null,
  })
  navigationRef.current.dispatch(resetAction)
}

function AppNavigator() {
    React.useEffect(() => {
        isMountedRef.current = true
        return () => (isMountedRef.current = false)
    }, [])

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={Stacks.ContactView}>
                <Stack.Screen
                    name={Stacks.ContactView}
                    component={contact}
                    options={{
                        title: 'Contacts',
                        headerTitleAlign: 'center',
                        headerLeft: (props) => <Image source={asset.icons.search} style={styles.headerIcon} />,
                        headerRight: (props) => <Image source={asset.icons.add} style={styles.headerIcon} />,
                    }}/>
                <Stack.Screen 
                    name={Stacks.ContactInfoView} 
                    component={contactInfo}
                    options={{
                        title: '',
                        headerTitleAlign:'center',
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;