import { put, call, take, select } from 'redux-saga/effects'
import { handleStatusError } from '.';
import { showAlert } from '../components';
import { getWord, initDictionary, initLanguage } from '../lib/LanguageService';
import { initConfig } from '../lib/ConfigService'
import { setPatchReady, SYSTEM_CHECK_MAINTENANCE, SYSTEM_INIT } from '../actions/SystemAction';
// import { initPatch } from '../lib/PatchService';
import { Linking, PermissionsAndroid, Platform } from 'react-native';
import { getSession, initSession } from '../lib/session';
import NavigationService from '../lib/NavigationService';
import { apiCheckMaintenance } from '../api/SystemApi';
import { handleOpenURL } from '../lib/RoutingService';
import { SystemSelector } from '../reducers/SystemReducer';

const downloadProgress = ({ received, total }) => {
    console.log("🚀 ~ file: SystemSaga.js ~ line 17 ~ downloadProgress ~ received, total", received, total)
    //     setTotalSize(total)
    //     setFileSize(received)
}
const downLoadBegin = (response) => { }
//ROA Messenger ต้องการเข้าถึง Storage ของเครื่องสำหรับขบวนการอ่านบัตรประชาชน
export function* workerCheckAndroidPermission() {
    if (Platform.OS == 'android') {
        const granted = yield call(PermissionsAndroid.request,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: "Permission Request.",
                message:
                    "Allow Profita to access photos, media, and files on your device?",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            return false;
        }
    }
    return true;
}

export function* workerSystemInit() {
    try {
        yield call(initSession)
        yield call(initLanguage)
        const maintananceFlag = yield call(workerCheckSystemMaintenance)
        if (maintananceFlag) { return }

        // const patch = yield call(initPatch, downloadProgress, downLoadBegin)
        // if (!patch) {
        //     throw new Error('Update Patch Failed')
        // }
        yield call(initDictionary)
        yield call(initConfig)
        yield call(workerCheckAndroidPermission)
        yield put(setPatchReady())
        //!!! CAUTION !!!! Do not move instantiate to upper line it cause nullable value
        const { initURL } = yield select(SystemSelector)
        yield call(handleOpenURL, { url: initURL })
    } catch (error) {
        yield call(handleStatusError, error)
    }
}

export function* watcherSystemInit() {
    while (true) {
        yield take(SYSTEM_INIT)
        yield call(workerSystemInit)
    }
}

export function* workerCheckSystemMaintenance() {
    try {
        const response = yield call(apiCheckMaintenance)
        if (response.getmaintenance?.maintenance == "Y") { //prevent from "N"
            yield call(NavigationService.resetTo, "MaintenancePage", { message: response.getmaintenance?.message, title: response.getmaintenance?.title })
            return true;
        }
        return false;
    } catch (error) {
        yield call(handleStatusError, error)
        return true; // stop when error occur
    }
}

export function* watcherCheckSystemMaintenance() {
    while (true) {
        yield take(SYSTEM_CHECK_MAINTENANCE)
        yield call(workerCheckSystemMaintenance)
    }
}