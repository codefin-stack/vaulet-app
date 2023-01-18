/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react';
import { Text, useColorScheme, AppState, Platform, View } from 'react-native';

import { AppContainer } from './src/pages';
import { Provider } from 'react-redux';
import { store } from './src/store';

// const Section: React.FC<
//   PropsWithChildren<{
//     title: string;
//   }>
// > = ({ children, title }) => {
//   return (
//     <View>
//       <Text>
//         {title}
//       </Text>
//       <Text>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <AppContainer />
      {/* <ModalSpinner />
      <DialogProvider />
      {(Platform.OS == 'ios') && <ScreenCover visible={!activeState} />} */}
    </Provider>
  );
};

export default App;
