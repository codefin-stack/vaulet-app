// import AsyncStorage from '@react-native-community/async-storage';
// import geolocation from '@react-native-community/geolocation';
import AsyncStorage from 'react-native-encrypted-storage';

import { SESSION_LIFETIME } from '../config';

export const AUTHEN_SESSION = 'AuthenSession';
var _session = {}
// var _location = { latitude: 0, longitude: 0 }
var _timestamp = new Date().getTime();
var _sessionAliveFlag = false;

var _trackingAllowed = false;

export const clearSession = () => {
    setSession({})
}

export const authorized = () => {
    return _session && _session.userID && _session.userID != "";
}

export const setSession = (data) => {
    try {
        _session = data;
        _timestamp = new Date().getTime();
        // jtw decrype
        AsyncStorage.setItem(AUTHEN_SESSION, JSON.stringify(data))
    } catch (error) {
        console.log('!!!!! setSession Error !!!!!! \n', error)
    }
}

export const getSession = () => {
    return { ..._session, userID: _session.userID };
}

export const initSession = async () => {
    try {
        const sessionFile = await AsyncStorage.getItem(AUTHEN_SESSION)
        // jtw encrype
        const sessionOBJ = JSON.parse(sessionFile || "{}")
        console.log('========= session ======== \n', sessionOBJ)
        if (sessionOBJ && sessionOBJ.token) {//sessionOBJ.token 
            _session = { ..._session, ...sessionOBJ };
            _timestamp = new Date()
        }
    } catch (error) {
        console.log('!!!!! workInitSession Error !!!!!! \n', error)
    }
}

// export const updateLocation = async () => {
//     await geolocation.getCurrentPosition(position => {
//         _location.latitude = position.coords.latitude;
//         _location.longitude = position.coords.longitude;
//         console.log('_____ Update Position ____', position);
//     }, (error) => {
//         console.log('____ Error Position ____', error)
//     });
// }

// export const getLocation = () => {
//     return _location
// }

export const isMobileTimeout = () => {
    if (SESSION_LIFETIME == 0) { return false }
    const now = new Date().getTime()
    return authorized() && now > _timestamp + (SESSION_LIFETIME * 1000);
}

export const updateMobileTimer = () => {
    // console.log('update session :', _timestamp)
    const now = new Date().getTime()
    _timestamp = now;
}

export const setSessionAlive = (flag) => {
    _sessionAliveFlag = flag
}

export const isSessionAlive = () => {
    return _sessionAliveFlag;
}

export const setTrackingAllowFlag = (flag) => {
    _trackingAllowed = flag;
}

export const getTrackingAllowFlag = (flag) => {
    return _trackingAllowed;
}