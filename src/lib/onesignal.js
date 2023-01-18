import OneSignal from 'react-native-onesignal';
import { showAlert } from '../components';
import NavigationService from './NavigationService';

export const initOneSignal = (onesignalAppID) => {
  //OneSignal Init Code
  OneSignal.setLogLevel(6, 0);
  OneSignal.setAppId(onesignalAppID);
  //END OneSignal Init Code

  //Prompt for push on iOS
  OneSignal.promptForPushNotificationsWithUserResponse(response => {
    console.log("Prompt response:", response);
  });

  //Method for handling notifications received while app in foreground
  OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
    console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
    let notification = notificationReceivedEvent.getNotification();
    console.log("notification: ", notification);
    const data = notification.additionalData
    console.log("additionalData: ", data); //
    // Complete with null means don't show a notification.
    if (data?.maintenance == "Y") {
      showAlert(data?.title || 'ขออภัย', data?.message || 'ระบบกำลังอยู่ระหว่างการปรับปรุง โปรดเข้าใช้บริการภายหลัง').then(() => {
        NavigationService.resetTo("MaintenancePage", { message: data?.message, title: data?.title })
      }).catch()
    }
    if (data?.forceReload == "Y") {
      showAlert(notification.title || 'ขออภัย', notification.body || 'กำลังนำท่านเข้าสู่ระบบอีกครั้ง').then(() => {
        NavigationService.resetTo("SplashPage")
      }).catch()
    }
    notificationReceivedEvent.complete(notification);
  });

  //Method for handling notifications opened
  OneSignal.setNotificationOpenedHandler(notification => {
    console.log("OneSignal: notification opened:", notification);
    // check isPatchReady and action as U-link did
  });
}