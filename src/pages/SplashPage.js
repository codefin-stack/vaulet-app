import React, { useEffect, useRef } from 'react';
import { View, Linking, Platform, Text } from 'react-native';
// import { PageProvider, Colors } from '../components';
import { useDispatch, } from 'react-redux'
// import { initSystem, setInitURL } from '../actions/SystemAction';
// import { AppLogoSVG, SplashSVG } from '../components/VectorIcon';
import { Animated, Easing } from 'react-native';

export default SplashPage = () => {
    const dispatch = useDispatch()
    const splashOpac = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Linking.getInitialURL().then(url => {
            // dispatch(setInitURL(url))
            // dispatch(initSystem())
        });
        Animated.timing(
            splashOpac,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        ).start()
    }, []);

    return (
        // <PageProvider type={1} backgroundColor={Colors().THEME_PRIMARY}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Animated.View style={{ opacity: splashOpac }}>
                    {/* <AppLogoSVG width={200} height={200} fill={Colors().THEME_TEXT} fill2={"#888"} /> */}
                    <Text>Vaulet Splash</Text>
                </Animated.View>
            </View>
        //</PageProvider>
    );
}