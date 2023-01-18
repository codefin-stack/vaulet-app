export const AUTH_USER_CHANGED = 'AUTH_USER_CHANGED';
export const AUTH_PASS_CHANGED = 'AUTH_PASS_CHANGED';
export const AUTH_SMSPIN_CHANGED = 'AUTH_SMSPIN_CHANGED';
export const AUTH_LOGIN_CALL = 'AUTH_LOGIN_CALL';
export const AUTH_SMSPIN_RESEND = 'AUTH_SMSPIN_RESEND';
export const AUTH_CLEAR_AUTHORIZE = 'AUTH_CLEAR_AUTHORIZE';
export const AUTH_LOGIN_PASSCODE = 'AUTH_LOGIN_PASSCODE';
export const AUTH_CONFIRM_PASSCODE = 'AUTH_CONFIRM_PASSCODE';
export const AUTH_AUTO_ROUTING = 'AUTH_AUTO_ROUTING';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_SWITCH_TOUCHID = 'AUTH_SWITCH_TOUCHID';
export const AUTH_SWITCH_DARKMODE = 'AUTH_SWITCH_DARKMODE';
export const AUTH_SWITCH_LANG = 'AUTH_SWITCH_LANG';
export const AUTH_SWITCH_LOGIN_PAGE_FLAG = 'AUTH_SWITCH_LOGIN_PAGE_FLAG'
export const AUTH_TOUCH_ID_VERIFY = 'AUTH_TOUCH_ID_VERIFY';
export const AUTH_NAVIGATE_FLAG = 'AUTH_NAVIGATE_FLAG';
export const AUTH_RESEND_OTP = 'AUTH_RESEND_OTP';
export const AUTH_LOGIN_CHECK_TERM = 'AUTH_LOGIN_CHECK_TERM';

export const userChanged = (text) => ({
  type: AUTH_USER_CHANGED,
  payload: text
})

export const passwordChanged = (text) => ({
  type: AUTH_PASS_CHANGED,
  payload: text
})

export const smsPinChanged = (text) => ({
  type: AUTH_SMSPIN_CHANGED,
  payload: text
})

export const loginCall = () => ({
  type: AUTH_LOGIN_CALL,
  payload: null
})

export const smsPinResend = () => ({
  type: AUTH_SMSPIN_RESEND,
  payload: null
})

export const clearAuthState = () => ({
  type: AUTH_CLEAR_AUTHORIZE,
  payload: null
})

export const loginPasscodeCall = () => ({
  type: AUTH_LOGIN_PASSCODE,
  payload: null
})

export const confirmPasscodeCall = (text) => ({
  type: AUTH_CONFIRM_PASSCODE,
  payload: text
})

export const autoRoutingCall = (value) => ({
  type: AUTH_AUTO_ROUTING,
  payload: value
})

export const logoutCall = () => ({
  type: AUTH_LOGOUT,
  payload: null
})

export const switchTouchId = (flag) => ({
  type: AUTH_SWITCH_TOUCHID,
  payload: flag
})

export const switchDarkmode = (flag) => ({
  type: AUTH_SWITCH_DARKMODE,
  payload: flag
})

export const switchLanguage = (data) => ({
  type: AUTH_SWITCH_LANG,
  payload: data
})

export const switchLoginPageFlag = (value) => ({
  type: AUTH_SWITCH_LOGIN_PAGE_FLAG,
  payload: value
})

export const touchIdVerify = () => ({
  type: AUTH_TOUCH_ID_VERIFY,
  payload: null
})

export const navigateFlag = (value) => ({
  type: AUTH_NAVIGATE_FLAG,
  payload: value
})

export const authResendOtp = (value) => ({
  type: AUTH_RESEND_OTP,
  payload: value
})

export const authLoginCheckTerm = (value) => ({
  type: AUTH_LOGIN_CHECK_TERM,
  payload: value
})