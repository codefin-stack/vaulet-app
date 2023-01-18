export const SYSTEM_INIT = 'SYSTEM_INIT';
export const SYSTEM_CHECK_MAINTENANCE = 'SYSTEM_CHECK_MAINTENANCE';
export const SYSTEM_FORCE_UPDATE = 'SYSTEM_FORCE_UPDATE';
export const SYSTEM_PATCH_READY = 'SYSTEM_PATCH_READY';
export const SYSTEM_SET_INIT_URL = 'SYSTEM_SET_INIT_URL';

export const initSystem = () => ({
  type: SYSTEM_INIT,
  payload: null
})

export const checkSystemMaintenance = () => ({
  type: SYSTEM_CHECK_MAINTENANCE,
  payload: null
})

export const forceUpdate = () => ({
  type: SYSTEM_FORCE_UPDATE,
  payload: null
})

export const setPatchReady = () => ({
  type: SYSTEM_PATCH_READY,
  payload: null
})

export const setInitURL = (url) => ({
  type: SYSTEM_SET_INIT_URL,
  payload: url
})