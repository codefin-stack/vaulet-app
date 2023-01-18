import NavigationService from '../lib/NavigationService';
import { authorized, getSession, isMobileTimeout, isSessionAlive } from './session';
import { API_ENDPOINT_PROFITA, API_ENDPOINT_PROFITA_DEEP_LINK, HOMEPAGE, LOGINPAGE } from '../config';
// import { showAlert } from '../components';
import { autoRoutingCall } from '../actions/AuthAction';
import { store } from '../store';
import StorageService from '../lib/StorageService';
import { navigateFlag } from '../actions/AuthAction'
// import crashlytics from '@react-native-firebase/crashlytics';
// import dynamicLinks from '@react-native-firebase/dynamic-links';

var _routingObj = null
var needLogin = false
var forceLogin = false // ignore session alive 
var isInAppRouting = false

export const gotoRoutingCache = () => {
    if ((needLogin || forceLogin) && !isInAppRouting) { NavigationService.navigate(HOMEPAGE) } // basement for backward
    { _routingObj, needLogin, forceLogin }
    needLogin = false
    forceLogin = false
    isInAppRouting = false
    const rountOBJ = _routingObj
    _routingObj = null
    if (rountOBJ?.routeAction) {
        store.dispatch(rountOBJ?.routeAction())
    } else if (rountOBJ?.routeName) {
        NavigationService.navigate(rountOBJ.routeName, rountOBJ.params)
    } else {
        NavigationService.resetTo(HOMEPAGE)
    }
}

/**
 * 
 * @param {Object} param0 
 * @param {String} param0.url url contain endpoint and parameter
 * @param {Object} param0.additionData
 * @param {String} param0.additionData.NotiID
 * @param {String} param0.additionData.isInAppRouting flag to tell isInAppRouting if true skip basement for backward when gotoRoutingCache call
 */
export const handleOpenURL = async ({ url, additionData }) => { // ex: https://mobile.codefin.co.th/feed, https://codefin.co.th/feed?caller=mchoice&filter=none
    // additionData in case of notification reciever
    try {
        console.log("====== url is ======", url)
        if (!url) {
            autoRouting()
            return;
        }
        // const checkDynamic = await dynamicLinks().resolveLink(url).catch(() => { })
        const checkDynamic = { url: null }
        store.dispatch(navigateFlag(true))
        const regExpUrlSchema = new RegExp(`(${API_ENDPOINT_PROFITA})|(${API_ENDPOINT_PROFITA_DEEP_LINK})`)
        const route = checkDynamic?.url ? checkDynamic?.url.replace(regExpUrlSchema, '') : url.replace(regExpUrlSchema, '')
        // const route = url.replace(/(.*?:\/\/)|(lh-client-gateway.codefin.dev\/profita)(\/*)/g, '');

        // let routeName = route.split(/[?\/]/)[0];
        let routeName = route.split('?')[0];
        let _params = route.split('?')?.[1];
        let params = {};
        if (_params) {
            _params.split('&').forEach(paramElm => {
                const param = paramElm.split('=')
                params[param[0]] = param[1]
            })
        }

        // let currentPage = NavigationService.getRootNavigator()?.getCurrentRoute()?.name
        console.log('!!!!!!!!!!!!!  Routing Detect !!!!!!!!!!!!!!\n', routeName, params)
        // {"caller": "mchoice", "cif": "1122334455", "token": "abcdefg"}

        const welcome = await StorageService.getWelcomePage();
        let routeAction = null
        switch (routeName) {
            // case "fund":
            //     needLogin = true;
            //     routeAction = () => getFundDetail({ fundCode: params?.code?.replace(/(_s_)/g, " ") }); //support KKP fundcode
            //     break;
            // case "notification":
            //     needLogin = true;
            //     routeAction = () => getNotificationDetail({ id: params?.id });
            //     break;
            // case "content":
            //     needLogin = true;
            //     routeAction = () => getFundContentById({ contentId: params, notiID: additionData?.NotiID }); break;
            default:
                routeAction = () => autoRoutingCall()
            // routeName = getSession().userID ? HOMEPAGE : welcome ? LOGINPAGE : 'WelcomePage'
        }

        _routingObj = { routeAction, routeName, params }
        isInAppRouting = !!(additionData?.isInAppRouting)
        if (forceLogin || isMobileTimeout() || (needLogin && !isSessionAlive())) {
            autoRouting()
        } else {
            console.log("🚀 ~ file: RoutingService.js ~ line 123 ~ handleOpenURL ~ go to gotoRoutingCache")
            gotoRoutingCache()
        }
    } catch (ex) {
        console.log("handleOpenURL error : ", ex)
        // showAlert('Error', 'Invalid Bypass URL')
        // crashlytics().recordError(ex, "routingError");
    }
}


export const autoRouting = (value) => {
    store.dispatch(autoRoutingCall(value))
}