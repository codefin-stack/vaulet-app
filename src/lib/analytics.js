import analytics from '@react-native-firebase/analytics';
import { getTrackingAllowFlag } from './session';

export default customAnalytic = (eventType, obj) => {
    try {
        if (!getTrackingAllowFlag()) { return; }
        // console.log('[ Tracking Event ] => ', eventType, obj) 
        switch (eventType) {
            case "LogEvent": // SelectFund  Follow Unfollow ShareFund
                analytics()?.logEvent(obj?.eventName || "unknown", obj);
                break;
            case "Searched":
                analytics()?.logEvent(eventType, { text: obj?.text });
                break;
            case "LogScreenView":
                analytics()?.logScreenView(obj);
                // analytics()?.logEvent(eventType, { view: obj?.text });
                // no need to enable fbSDK and appFlyer
                break;
            // case "LogLogin":
            //     analytics()?.logLogin(obj);
            //     break;
            case "StartTrial":
                analytics()?.logEvent("StartTrial", { step: obj?.step });
                break;
            case "CompletedRegistration":
                analytics()?.logEvent("fb_mobile_complete_registration", { step: obj?.step, type: obj?.type });
                break;
            case "Contact":
                analytics()?.logEvent("fb_mobile_tutorial_completion", { step: obj?.step });
                break;
            case "AddedToWishlist":
                analytics()?.logEvent("fb_mobile_add_to_wishlist", { step: obj?.step });
                break;
            case "SubmitApplication":
                analytics()?.logEvent("SubmitApplication", { step: obj?.step });
                break;
            case "Subscribe":
                analytics()?.logEvent("Subscribe", { step: obj?.option });
                break;
            default: ;
        }
    } catch (error) {
        console.log("Analytic Error", error)
    }
}
