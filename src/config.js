import { Platform } from 'react-native';

/// DEV ///
export const API_ENDPOINT = 'https://lh-client-gateway.codefin.dev/'
export const API_ENDPOINT_PROFITA = 'https://lh-client-gateway.codefin.dev/profita/'
export const API_ENDPOINT_PROFITA_DEEP_LINK = 'profita://'
export const PROFITA_DYNAMIC_LINK = 'https://profitadev.page.link'
export const PROFITA_IMAGE_PATH = API_ENDPOINT + 'api/image?fileName='
// export const APP_LINK_ENDPOINT_MCHOICE = 'https://sitmchoice.page.link'

export const API_ENDPOINT_WITHOUT_SLASH = API_ENDPOINT.replace(/\/$/, '')
export const API_ENDPOINT_MOCK = 'https://lh-mock-api.codefin.dev/'
export const SETTING_ENDPOINT_HOW_TO_USE = 'https://www.lhbank.co.th/ลูกค้าบุคคล/digitalbanking/profita/lhb-digital-banking-profita-how-to/'

export const ONESIGNAL_APP_ID = "81769427-4d98-4604-8490-5125446fc792" 
export const FACEBOOK_APP_ID = "1305057983276932" 
export const ENV_TEXT = `DEV`
export const DEBUG = true;
export const PASSCODE_USE = true
export const TOUCH_ID_ENABLE = true
export const USE_MOCK_PATCH = true

// export const MOBILE_ALBUM_NAME = 'Profita'

export const APPSTORE_ID = '1608172117';
export const APPSTORE = Platform.select(
    { 
        ios: 'https://apps.apple.com/th/app/lh-bank-m-choice/id1600453199',
        android: 'https://play.google.com/store/apps/details?id=com.lhinvest'
    }
)

export const HOMEPAGE = 'MainPage'
export const LOGINPAGE = 'StartPage'

export const SESSION_CHECK_FREQUENCY = 60  //seconds , 1 if found navigate vulnerability
export const SESSION_LIFETIME = 300 //seconds , 0 to disable 300 for 5 mins
