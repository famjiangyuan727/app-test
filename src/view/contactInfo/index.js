import React from 'react';
import { 
    Alert,
    Image, 
    View,
    Keyboard
} from 'react-native';
import { 
    Text, 
    SafeAreaView,
    Divider,
    TextInput
} from '../../component';
import { goBack } from '../../navigation';
import styles from './style';
import asset from '../../asset';
import { generateRandomString, isNullorEmpty, validateEmail } from '../../common/util';
import { getData, setData } from '../../common/asyncStorage';

class ContactInfo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            index: null,
            action: null,
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        }
    }

    componentDidMount() {
        // override headerLeft and headerRight function
        this.props.navigation.setOptions({
            headerLeft: (props) => <Text text={'Cancel'} style={styles.headerTextColor} onPress={() => this.onCancel(props)}/>,
            headerRight: (props) => <Text text={'Save'} style={styles.headerTextColor} onPress={() => this.onSave(props)}/>,
        })

        this.getContactData()
    }

    componentWillUnmount() {}

    getContactData = () => {
        const { params } = this.props.route
        console.log(params)
        this.setState({
            index: params.index,
            action: params.action,
            firstName: params.firstName,
            lastName: params.lastName,
            email: params.email,
            phone: params.phone
        })
    }
    
    onCancel = (props) => {
        if (props.canGoBack) goBack()
    }

    onSave = (props) => {
        const { firstName, lastName, email, phone, action } = this.state
        if (isNullorEmpty(firstName) || isNullorEmpty(lastName)) {
            Alert.alert('Note', 'First Name or Last Name cannot be empty.')
            return
        }

        if (!isNullorEmpty(email) && !validateEmail(email)) {
            Alert.alert('Note', 'Invalid email format.')
            return
        }

        if (action === 'edit') {
            // update async storage list
            // back and refresh contact list
            this.updateContactList(props)
        } else if (action === 'add') {
            // add to async storage list
            // back and refresh contact list
            this.addContactList(props)
        }
    }

    updateContactList = async (props) => {
        try {
            const { index ,firstName, lastName, email, phone } = this.state

            const data = await getData()
            data[index] = {
                ...data[index],
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone
            }
            await setData(data)
            if (props.canGoBack) goBack()
        } catch (error) {
            console.log(error)
        }
    }

    addContactList = async (props) => {
        try {
            const { firstName, lastName, email, phone } = this.state

            const data = await getData()
            data.push({
                id: generateRandomString(24),
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone
            })
            await setData(data)
            if (props.canGoBack) goBack()
        } catch (error) {
            console.log(error)
        }
    }
    
    onFirstNameChange = (val) => {
        this.setState({firstName: val})
    }
    
    onLastNameChange = (val) => {
        this.setState({lastName: val})
    }
    
    onEmailChange = (val) => {
        this.setState({email: val})
    }
    
    onPhoneChange = (val) => {
        this.setState({phone: val})
    }

    render() {
        const { firstName, lastName, email, phone } = this.state
        return (
            <SafeAreaView navigation={this.props.navigation}>
                <View style={styles.flexView}>

                    {/* profile pic */}
                    <View style={styles.contentContainer}>
                        <Image source={asset.images.defaultProfilePic} style={styles.profilePic} />
                    </View>

                    {/* main info */}
                    <View>
                        <View style={styles.infoContainer}>
                            <Text text={'Main Information'} style={styles.infoTitle} />
                        </View>
                        <View style={styles.fieldContainer}>
                            <Text text={'First Name'} style={styles.flex0_5} />
                            <TextInput
                                value={firstName}
                                returnKeyType={'next'} 
                                onRef={input => this.textInput1 = input}
                                onSubmitEditing={() => {
                                    console.log('textInput2: ', this.textInput2)
                                    this.textInput2.focus()
                                }}
                                blurOnSubmit={false}
                                onChangeText={this.onFirstNameChange} />
                        </View>
                        <Divider />
                        <View style={styles.fieldContainer}>
                            <Text text={'Last Name'} style={styles.flex0_5} />
                            <TextInput
                                value={lastName}
                                returnKeyType={'next'} 
                                onRef={input => this.textInput2 = input}
                                onSubmitEditing={() => this.textInput3.focus()}
                                blurOnSubmit={false}
                                onChangeText={this.onLastNameChange} />
                        </View>
                    </View>

                    {/* sub info */}
                    <View>
                        <View style={styles.infoContainer}>
                            <Text text={'Sub Information'} style={styles.infoTitle} />
                        </View>
                        <View style={styles.fieldContainer}>
                            <Text text={'Email'} style={styles.flex0_5} />
                            <TextInput 
                                value={email} 
                                returnKeyType={'next'} 
                                onRef={input => this.textInput3 = input}
                                onSubmitEditing={() => this.textInput4.focus()}
                                blurOnSubmit={false}
                                onChangeText={this.onEmailChange} />
                        </View>
                        <Divider />
                        <View style={styles.fieldContainer}>
                            <Text text={'Phone'} style={styles.flex0_5}/>
                            <TextInput
                                value={phone}
                                returnKeyType={'next'} 
                                onRef={input => this.textInput4 = input}
                                onSubmitEditing={() => {
                                    this.textInput4.blur()
                                    Keyboard.dismiss()
                                }}
                                blurOnSubmit={false}
                                onChangeText={this.onPhoneChange} />
                        </View>
                        <Divider />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default ContactInfo
