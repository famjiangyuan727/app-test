import React from 'react';
import { 
    Image, 
    RefreshControl, 
    TouchableOpacity, 
    View 
} from 'react-native';
import { getData, setData } from '../../common/asyncStorage';
import JSONData from '../../data/data.json';
import { 
    Text, 
    SafeAreaView,
    Divider
} from '../../component';
import { navigate } from '../../navigation';
import NavigationConstant from '../../navigation/constant';
import AppStyles, { Colors } from '../../style';
import styles from './style';
import asset from '../../asset';
import { isNullorEmpty } from '../../common/util';

const { images, icons } = asset
const { Stacks } = NavigationConstant

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isRefreshing: false,
            contactList: []
        }
    }

    componentDidMount() {
        // override headerLeft and headerRight function
        this.props.navigation.setOptions({
            headerRight: (props) => {
                return (
                    <TouchableOpacity onPress={this.onAddContactPress}>
                        <Image source={icons.add} style={AppStyles.headerIcon} />
                    </TouchableOpacity>
                )
            },
        })

        this.getContactList()

        this.unsubscribe = this.props.navigation.addListener('focus', () => this.getContactList())
    }

    componentWillUnmount() {
        this.unsubscribe()
    }


    getContactList = async () => {
        try {
            let data = await getData()
            if (isNullorEmpty(data)) {
                await setData(JSONData)
                data = JSONData
            }
            this.setState({
                contactList: data,
                isRefreshing: false
            })
        } catch (error) {
            console.log(error)
        }
    }

    onRefresh = () => {
        this.setState({isRefreshing: true}, () => {
            this.getContactList()
        })
    }

    renderContact = (contactList) => {
        return (
            Array.from(contactList).map((item, index) => {
                const name = item.firstName + ' ' + item.lastName
                return (
                    <View key={index}>
                        <TouchableOpacity 
                            onPress={() => this.onContactPress(item, index)} 
                            style={styles.contentContainer}>
                            <Image source={images.defaultProfilePic} style={styles.profilePic} />
                            <Text text={name} />
                        </TouchableOpacity>
                        <Divider />
                    </View>
                )
            })
        )
    }

    onAddContactPress = () => {
        navigate(Stacks.ContactInfoView, {action: 'add'})
    }

    onContactPress = (item, index) => {
        navigate(Stacks.ContactInfoView, {...item, index, action: 'edit'})
    }

    renderItemSeparator = () => {
        return (<Divider />)
    }

    render() {
        const { contactList, isRefreshing } = this.state
        return (
            <SafeAreaView 
                navigation={this.props.navigation}
                refreshControl={
                    <RefreshControl
                        colors={[Colors.primary]} 
                        tintColor={Colors.primary} 
                        refreshing={isRefreshing} 
                        onRefresh={this.onRefresh} />
                }>
                <View style={styles.flexView}>
                    {this.renderContact(contactList)}
                </View>
            </SafeAreaView>
        )
    }
}

export default Contact
