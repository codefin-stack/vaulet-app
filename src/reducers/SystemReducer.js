import {
  SYSTEM_FORCE_UPDATE,
  SYSTEM_PATCH_READY,
  SYSTEM_SET_INIT_URL
} from '../actions/SystemAction';
export const SYSTEM_STATE = 'system';
const INITIAL_STATE = {
  updateLayout: false,
  isPatchReady: false,
  initURL: null,
};

export const SystemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SYSTEM_FORCE_UPDATE:
      return { ...state, updateLayout: !state.updateLayout };
    case SYSTEM_PATCH_READY:
      return { ...state, isPatchReady: true };
    case SYSTEM_SET_INIT_URL:
      return { ...state, initURL: action.payload };
    default:
      return state;
  }
}

export const SystemSelector = (state) => {
  return state[SYSTEM_STATE]
}