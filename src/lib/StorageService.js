// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from 'react-native-encrypted-storage';
export const OPEN_ACCOUNT = 'openAccount';
export const WELCOME_PAGE = 'welcomePage';
export const SEARCH_HISTORY = 'searchHistory';

// await EncryptedStorage.clear();

const updateStorage = async (name, data) => {
  try {
    const storageOBJ = await getStorage(name);
    return AsyncStorage.setItem(name, JSON.stringify({ ...storageOBJ, ...data }))
  } catch (error) {
    console.log('!!!!! Update storage ' + name + ' Error !!!!!! \n', error)
  }
}

const setStorage = async (name, data) => {
  try {
    return AsyncStorage.setItem(name, JSON.stringify(data))
  } catch (error) {
    console.log('!!!!! Set storage ' + name + ' Error !!!!!! \n', error)
  }
}

const getStorage = async (name) => {
  try {
    const file = await AsyncStorage.getItem(name)
    return JSON.parse(file)
  } catch (error) {
    console.log('!!!!! Get storage ' + name + ' Error !!!!!! \n', error)
  }
}

const clearStorage = async (name) => {
  try {
    return await AsyncStorage.removeItem(name)
  } catch (error) {
    console.log('!!!!! Clear storage ' + name + ' Error !!!!!! \n', error)
  }
}

//////////////////////////////////////////////////////////////////////////

export const setOpenAccount = async (data) => {
  return updateStorage(OPEN_ACCOUNT, data)
}

export const getOpenAccount = async () => {
  return getStorage(OPEN_ACCOUNT)
}

export const clearOpenAccount = async () => {
  return clearStorage(OPEN_ACCOUNT)
}

export const setWelcomePage = async (data) => {
  return updateStorage(WELCOME_PAGE, data)
}

export const getWelcomePage = async () => {
  return getStorage(WELCOME_PAGE)
}

export const setHistoryStorage = async (data) => {
  return setStorage(SEARCH_HISTORY, data)
}

export const getHistoryStorage = async () => {
  return getStorage(SEARCH_HISTORY)
}

export const clearHistoryStorage = async () => {
  return clearStorage(SEARCH_HISTORY)
}

export default {
  setOpenAccount,
  getOpenAccount,
  clearOpenAccount,
  setWelcomePage,
  getWelcomePage,
}