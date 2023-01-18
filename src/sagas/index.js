import { all, fork, call, } from 'redux-saga/effects'
import { clearSession, isSessionAlive, setSessionAlive } from '../lib/session';
import { Linking } from 'react-native';
// import { APPSTORE } from '../config';
// import { ApiMessageErrorDialog, showAlert, showDialog, showSpinner, UserNotActiveDialog } from '../components';
// import { ERROR_SESSION_LOST, ERROR_LIFETIME_TOKEN_INVALID, ERROR_INVALID_VERSION, ERROR_INVALID_PATCH, ERROR_CONNECTION_TIMEOUT, DEVICE_ID_NOT_MATCH, ERROR_INTERNAL, ERROR_GRAPHQL_VALIDATION, USER_IS_BLOCKED, ERROR_CLIENT_NETWORK_BLOCK, ERROR_UNABLE_RESOLVE_HOST, ERROR_INVALID_SSL_CERT } from '../api/apiCall';
// import { watcherAuthorize, workerAutoRouting, watcherAutoRouting, watcherSetupPasscode, watcherSwitchTouchId, watcherLogout, watcherSwitchDarkmode, watcherSwitchLanguage, watcherVerifyPin, watcherTouchIdVerify, watcherVerifyPinForSignIn, watcherAuthReSendMobileOTP, watcherHandleIdCardOrSuitTestIsUpdateCall, watcherLoginCheckTermAndCondition } from './AutorizeSaga';
// import { getWord } from '../lib/LanguageService';
import { watcherCheckSystemMaintenance, watcherSystemInit } from './SystemSaga';


// export function* handleStatusError(error) {
//     if (!error) { return; }
//     console.log('::::', error)
//     if (error == 'cancelled' || error?.message == ',,') {
//         error = new Error(ERROR_INVALID_SSL_CERT)
//     }

//     if (error?.message == ERROR_SESSION_LOST) {
//         // handle dupplicate error warning in HOME
//         if (isSessionAlive()) {
//             yield call(setSessionAlive,false)
//             yield call(showAlert, getWord('error_topic'), getWord('error_session_lost'))
//             yield call(workerAutoRouting, { resetToPasscode: true })
//         }
//     } else if (error?.message == ERROR_LIFETIME_TOKEN_INVALID) {
//         yield call(showAlert, getWord('error_topic'), getWord('error_lifetime_token_invalid'))
//         yield call(clearSession)
//         yield call(workerAutoRouting, { resetToPasscode: true })
//     } else if (error?.message == ERROR_INVALID_SSL_CERT) {
//         yield call(showAlert, 'Alert','The certificate for this service is invalid.  Please check Profita update in the store', 'OK')
//         yield fork(() => Linking.openURL(APPSTORE))  
//         yield call(showSpinner) // block UI
//     } else if (error?.message == ERROR_INVALID_VERSION) {
//         yield call(showAlert, 'Alert', 'โปรดอัปเดตแอปพลิเคชัน Profita เพื่อประสิทธิภาพการใช้งานที่ดียิ่งขึ้น','OK')
//         yield fork(() => Linking.openURL(APPSTORE))  
//         yield call(showSpinner) // block UI
//     } else if (error?.message == ERROR_INVALID_PATCH) {
//         yield call(showAlert, getWord('error_topic'), getWord('error_invalid_patch'), getWord('ok'))
//         yield call( NavigationService.resetTo , "SplashPage" )
//     // } else if (error?.message == ERROR_CONNECTION_TIMEOUT) {
//     //     // getWord('connect_timeout')
//     //     yield call(showAlert, getWord('error_topic'), 'ระบบไม่สามารถทำรายการได้ในขณะนี้ โปรดลองใหม่อีกครั้ง (A003)')
//     } else if (error?.message == ERROR_INTERNAL) {
//         // SystemErrorDialog catch - up 500  (comment below)
//         yield call(showAlert, getWord('error_topic'), getWord('internal_error'))
//     } else if (error?.message == ERROR_CLIENT_NETWORK_BLOCK) {
//         yield call(showAlert, getWord('error_topic'), getWord('network_client_block'))
//     } else if (error?.message == ERROR_UNABLE_RESOLVE_HOST) {
//         yield call(showAlert, getWord('error_topic'), getWord('unable_resolve_host'))
//     } else if (error?.message == DEVICE_ID_NOT_MATCH) {
//         yield call(showAlert, getWord('error_topic'), getWord('device_id_not_match'))
//         yield call(StorageService.setWelcomePage, { alreadyLogin: "" })
//         yield call(clearSession)
//         yield call(workerAutoRouting)
//     } else if (error?.message == ERROR_GRAPHQL_VALIDATION) {
//         yield call(showAlert, getWord('error_topic'), getWord('graphQL_validation_failed'))
//     } else if (error == 'DIALOG_CANCEL_ERROR') {
//         //
//     } else if (error?.message == USER_IS_BLOCKED) {
//             yield call(setSessionAlive,false)
//             yield call(showDialog, UserNotActiveDialog, { errorCode: "1113" })
//             yield call(clearSession)
//             yield call(workerAutoRouting)
//     } else {
//         if (error?.name == "ErrorWithCode") {
//             yield call(showDialog, ApiMessageErrorDialog, {
//                 textDescription: getWord('unknown_error_code'),
//                 textLink: getWord('close'),
//                 errorCode: "Error code " + error?.message
//             })
//         } else {
//             yield call(showAlert, getWord('error_topic'), error?.message)
//         }
//     }
//     // yield call([crashlytics(), crashlytics().recordError], error, "APIError");
// }

export default function* rootSaga() {
    yield all([
        // fork(watcherAuthorize),
        // fork(watcherAuthReSendMobileOTP),
        // fork(watcherAutoRouting),
        fork(watcherSystemInit),
        fork(watcherCheckSystemMaintenance),

    ])
}