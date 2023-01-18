import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Linking, Platform } from 'react-native';
import SplashPage from './SplashPage';
import { navigationRef } from '../lib/NavigationService';
// import { handleOpenURL } from '../lib/RoutingService';
import { useDispatch, useSelector } from 'react-redux';
// import analytics from '../lib/analytics';


import { SystemSelector } from '../reducers/SystemReducer';
import { setInitURL } from '../actions/SystemAction';

const Stack = createStackNavigator();

export const AppContainer = (props) => {
  const { updateLayout, isPatchReady } = useSelector(SystemSelector)
  const dispatch = useDispatch()

  // const onPatchReady = (obj) => handleOpenURL(obj)
  const onPatchWaiting = (obj) => {
    if (obj?.url) { dispatch(setInitURL(obj.url)) }
  }

  // useEffect(() => {
  //   if (isPatchReady) {
  //     Linking.removeAllListeners('url')
  //     Linking.addEventListener('url', onPatchReady)
  //   } else {
  //     Linking.addEventListener('url', onPatchWaiting)
  //   }
  // }, [isPatchReady])


  const routeNameRef = React.useRef();
  return (<NavigationContainer /*linking={linking}*/
    ref={navigationRef}
    updateLayout={updateLayout}
    onReady={() => {
      routeNameRef.current = navigationRef.current.getCurrentRoute().name;
    }}
    onStateChange={async () => {
      const previousRouteName = routeNameRef.current;
      const currentRouteName = navigationRef.current.getCurrentRoute().name;

      if (previousRouteName !== currentRouteName) {
        // await analytics("LogScreenView", {
        //   screen_name: currentRouteName,
        //   screen_class: currentRouteName,
        // });
      }
      routeNameRef.current = currentRouteName;
    }}
  >
    <Stack.Navigator initialRouteName="SplashPage" screenOptions={{headerShown: false }}>
      <Stack.Screen name="SplashPage" component={SplashPage} options={{ animationEnabled:false, cardStyleInterpolator: forFade }} />
      {/* <Stack.Screen name="StartPage" component={StartPage} /> */}
    </Stack.Navigator>
  </NavigationContainer>)
}

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});