import AsyncStorage from '@react-native-async-storage/async-storage'

const DATA_KEY = 'DataKey'
export const setData = async (data) => await AsyncStorage.setItem(DATA_KEY, JSON.stringify(data))
export const getData = async () => JSON.parse(await AsyncStorage.getItem(DATA_KEY))
export const removeData = async () => await AsyncStorage.removeItem(DATA_KEY)