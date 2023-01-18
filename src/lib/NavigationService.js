import * as React from 'react';
import { StackActions } from '@react-navigation/native';
import { isMobileTimeout, updateMobileTimer } from './session';
export const navigationRef = React.createRef();

const mutateFunction = (Func) => {
  return (routeName, params) => {
    /////////////// use these code if found the navigate vulnerability ///////
    /////////////// to use these set SESSION_CHECK_FREQUENCY = 1 /////////////
    // if (isMobileTimeout() && !params?.ignoreSession) {
    //   return () => { };
    // } else {
    //   updateMobileTimer()
    // }
    // return Func(routeName, params)
    ////////////////////////////////////////////////////////////////////////////
    if (!params?.ignoreSession) {
      updateMobileTimer()
    }
    return Func(routeName, params)
  }
}

const navigate = (routeName, params) => {
  navigationRef.current?.navigate(routeName, params)
}

const resetTo = (routeName, params) => {
  navigationRef.current?.reset({
    index: 0,
    routes: [{ name: routeName, params }],
  })
}

const replace = (routeName, params) => {
  navigationRef.current?.dispatch(
    StackActions.replace(routeName, params)
  );
}

const goBack = (step) => {
  // if (!navigationRef.current?.canGoBack()) { return }
  if (typeof (step) == "number" && step >= 2) {
    navigationRef.current?.dispatch(
      StackActions.pop(step - 1)
    )
  }
  navigationRef.current?.goBack();
}

const getRootNavigator = () => navigationRef.current;

const navigatePush = (routeName, params) => {
  navigationRef.current?.dispatch(
    StackActions.push(routeName, { ...params })
  )
}

export default {
  getRootNavigator,
  navigate: mutateFunction(navigate),
  replace: mutateFunction(replace),
  resetTo: mutateFunction(resetTo),
  goBack: mutateFunction(goBack),
  navigatePush: mutateFunction(navigatePush),
};